const express = require('express')
const router = express.Router()
const { User } = require('../models/user')
const bcrypt = require('bcrypt')
// 보기편하게 lib/user.js 에 정리하기!!!🤣
// 추후에 토큰이나 세션으로 보안인증 하여 접근하도록 해야 한다.

// 유저 1명 검색 GET 요청
router.get('/oneFindUser', (req, res, next) => {
  const armynumber = req.body.armynumber
  User.findOne({ armynumber }, (err, docs) => {
    if (err) {
      res.status(500).json({
        message: '요청한 회원이 없습니다.',
      })
      throw err
    } else {
      console.log(docs)
      res.status(200).json({
        message: `회원 정보는 ${docs.name} 입니다.`,
        armynumber: `${docs.armynumber}`,
        name: `${docs.name}`,
        nickname: `${docs.nickname}`,
      })
    }
  })
})

// 모든 유저 GET 요청
// router.get('/allUser', (req, res, next) => {
//   User.find({}, (err, data) => {
//     if (err) throw err
//     res.json({
//       ...data,
//     })
//   })
// })

/**  // 요청된 군번 db에서 찾는다. 요청된 군번이 db에 있다면 비밀번호 일치여부 확인. 일치 시, 토큰 생성. 생성한 토큰을 쿠키에 저장한다 */
router.post('/login', (req, res) => {
  User.findOne({ armynumber: req.body.armynumber }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '제공된 ID에 유저 정보가 없습니다.',
      })
    }
    // 비밀번호가 일치하는 여부확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      console.log(isMatch)
      if (!isMatch) {
        res.json({
          loginSuccess: false,
          message: '비밀번호가 틀렸습니다.',
        })
      }
      //비밀번호 까지 맞다면 토큰을 생성하기
      else {
        if (err) return res.status(400).send(err)
        req.session.user = {
          army_number: req.body.armynumber,
          nickname: req.body.nickname,
          role: req.body.role,
        }
        res.status(200).json({
          loginSuccess: true,
          army_number: user.armynumber,
          name: user.name,
        })
      }
    })
  })
})

/** 로그아웃 */
// postman 으로 확인 못함 (session 값이 있어야함)
router.get('/logout', async function (req, res, next) {
  const session = req.session
  try {
    if (session.user) {
      //세션정보가 존재하는 경우
      await req.session.destroy(function (err) {
        if (err) console.log(err)
        else {
          res.redirect('/')
        }
      })
    }
  } catch (e) {
    res.redirect('/')
    console.log(e)
  }
})

/** 유저 삭제 */
router.delete('/userDelete', (req, res) => {
  User.findOneAndDelete({ armynumber: req.body.armynumber }, (err, results) => {
    if (err) {
      res.status(500).json({
        userDelete: false,
        message: '유저가 삭제 되지않았습니다.',
      })
      throw err
    } else {
      const session = req.session
      if (session) {
        req.session.destroy(function (err) {
          if (err) console.log(err)
          else {
            res.status(200).json({
              userDelete: true,
              message: '유저 정보가 삭제되었습니다.',
            })
          }
        })
      } else {
        res.status(404).json({
          message: 'session이 없습니다.',
        })
      }
    }
  })
})

/** 유저 생성 */
router.post('/register', async (req, res) => {
  const {
    name,
    armynumber,
    password,
    nickname,
    questions,
    armyunit,
    role,
    militaryrank,
  } = req.body
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)

  try {
    // id를 비교하여 user가 이미 존재하는지 확인
    // let user = await User.findOne({ id })
    // let hash = await User.findOne({ hashPassword })
    // if (user || hash) {
    //   return res.status(400).json({ errors: [{ msg: '유저가 존재합니다.' }] })
    // }

    // user에 name, email, password 값 할당
    const user = new User({
      nickname,
      name,
      armynumber,
      password,
      questions,
      hashPassword,
      armyunit,
      militaryrank,
      role,
    })

    // password를 암호화 하기
    req.session.user = {
      army_number: req.body.armynumber,
      nickname: req.body.nickname,
      role: req.body.role,
    }
    await user.save() // db에 user 저장

    res.status(200).json({
      message: '회원가입이 완료되었습니다.',
      // token 도 추가해야함
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: '회원가입이 실패하였습니다.',
    })
    throw error
  }
})

/** 유저 정보 변경 */
router.patch('/update', (req, res) => {
  const {
    armynumber,
    password,
    nickname,
    name,
    questions,
    militaryrank,
    armyunit,
  } = req.body
  User.updateOne(
    { armynumber },
    { armynumber, password, nickname, name, questions, militaryrank, armyunit },
  )
    .then((result) => {
      console.log(result)
      res.status(200).json({
        message: '유저 정보가 업데이트 되었습니다.',
        armynumber: result.armynumber,
      })
    })
    .catch((err) => {
      res.status(500).json({
        message: '유저 정보 업데이트에 실패하였습니다.',
      })
      throw err
    })
})

/** ID 찾기  */
router.patch('/findId', (req, res) => {
  // nickname 이 unique 값이므로 nickname 으로 찾는다.
  const { nickname, questions } = req.body
  User.findOne({ questions }, (err, results) => {
    if (err) {
      res.json({
        message: '질문이 없습니다.',
      })
      throw err
    } else {
      // 회원가입시 질문과 현재 질문과 일치하는지 확인
      if (questions === results.questions) {
        User.findOne({ nickname }, function (err, results) {
          if (err) {
            res.json({
              message: `에러 발생하였습니다`,
            })
            throw err
          } else {
            res.json({
              id: `${results.id}`,
              message: `성공적으로 찾았습니다`,
            })
          }
        })
      }
    }
  })
})

router.patch('/findpwd', (req, res) => {
  const id = req.body.id

  User.findOne({ id }, (err, results) => {
    if (err) {
      res.json({
        message: '에러 발생하였습니다',
      })
      throw err
    } else {
      res.json({
        password: `${results.password}`,
        message: `성공적으로 찾았습니다.`,
      })
    }
  })
})

module.exports = router
