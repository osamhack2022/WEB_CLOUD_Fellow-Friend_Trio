const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 20,
      required: true,
    },
    id: {
      type: String,
      maxlength: 20,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 5,
      required: true,
    },
    hashPassword: String,
    token: String,
    nickname: {
      type: String,
      unique: true,
      required: true,
    },
    questions: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
)

// userSchema.pre('save', function (next) {
//   let user = this
//   if (user.isModified('password')) {
//     // 암호화 진행
//     bcrypt.genSalt(saltRounds, () => (err, salt) => {
//       if (err) return next(err)
//       bcrypt.hash(user.password, salt, function (err, hash) {
//         if (err) return next(err)
//         user.password = hash
//         next()
//       })
//     })
//   } else {
//     next()
//   }
// })

/** 비밀번호 일치 확인 */
userSchema.methods.comparePassword = function (plainPassword, cb) {
  if (this.password === plainPassword) {
    console.log(plainPassword)
    cb(null, true)
  } else {
    cb('password 불일치')
  }
}

userSchema.methods.generateToken = function (cb) {
  let user = this

  //jsonwebtoken을 이용해서 token을 생성하기
  let token = jwt.sign(user._id.toHexString(), 'secretToken')

  user.token = token
  user.save(function (err, user) {
    if (err) return cb(err)
    cb(null, user)
  })
}

// userSchema.statics.findByToken = function (token, cb) {
//   let user = this
//   //토큰을 decode 한다.
//   jwt.verify(token, 'secretToken', function (err, decoded) {
//     //유저 아이디를 이용해서 유저를 찾은 다음
//     //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인

//     user.findOne({ _id: decoded, token: token }, function (err, user) {
//       if (err) return cb(err)
//       cb(null, user)
//     })
//   })
// }

const User = mongoose.model('users', userSchema)

module.exports = { User }
