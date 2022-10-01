const express = require('express')
const router = express.Router()
const User = require('../models/user')

// 보기편하게 lib/user.js 에 정리하기!!!🤣

// 유저 1명 검색 GET 요청
router.get('/oneFindUser', (req, res, next) => {
  const user = User.findById({ id: req.body.id })
  return res.json({
    ...user,
  })
})

// 모든 유저 GET 요청
router.get('/allUser', (req, res, next) => {
  constUser.find({}, (err, data) => {
    if (err) throw err
    res.json({
      ...data,
    })
  })
})

/**  // 요청된 군번 db에서 찾는다. 요청된 군번이 db에 있다면 비밀번호 일치여부 확인. 일치 시, 토큰 생성. 생성한 토큰을 쿠키에 저장한다 */
router.post('/login', (req, res) => {
  User.findOne({ id: req.body.id }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '제공된 ID에 유저 정보가 없습니다.',
      })
    }
    // 비밀번호가 일치하는 여부확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 틀렸습니다.',
        })
      }
      //비밀번호 까지 맞다면 토큰을 생성하기
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err)

        //token을 저장한다. 어디에? -> 쿠키, 로컬스토리지 둘중 하나를 쓸예정.
        // 일단은 쿠키로 저장
        res
          .cookie('x_auth', user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id, name: user.name })
      })
    })
  })
})

/** 유저 삭제 */
router.delete('/userDelete', (req, res) => {
  User.findOneAndDelete({ id: req.body.id }).then(
    (res) => {
      res.json({
        userDelete: true,
        message: '유저 정보가 삭제되었습니다.',
      })
    },
    (err) => {
      if (err) {
        res.json({
          userDelete: false,
          message: '유저가 삭제 되지않았습니다.',
        })
      }
    }
  )
})

/** 유저 생성 */
router.post('/register', (req, res) => {
  const user = new User({ ...res.body })
  user.save().then(() => {
    // token값을 가져와서 보내야한다.
    res
      .json({
        message: '계정이 생성되었습니다.',
      })
      // 실패 시 다시 시도할 수 있는 로직 구현해야한다.
      .catch((err) => {
        res.json({
          message: '계정 생성에 실패하였습니다.',
        })
      })
  })
})

/** 유저 정보 변경 */
router.put('/update', (req, res) => {
  User.updateOne(
    {
      id: res.body.id,
    },
    {
      ...res.body,
    },
    function (err, res) {
      err
        ? res.json({
            message: '계정 정보 업데이트에 실패하였습니다.',
          })
        : res.json({
            message: '계정 정보 업데이트에 성공하였습니다..',
          })
    }
  )
})

module.exports = router
