const monogoose = require('monogoose')
const bcrypt = require('bcrypt')
const saltRounds = 12
const jsonwebtoken = require('jsonwebtoken')
const UserSchema = monogoose.Schema({
  name: {
    type: String,
    maxlength: 20,
    required: true,
  },
  password: {
    type: String,
    minlength: 5,
    required: true,
  },
  token: {
    type: String,
  },
  alias: {
    type: String,
    required: true,
  },
})

UserSchema.pre('save', (next) => {
  if (user.isModified('password')) {
    // 암호화 진행
    bcrypt.genSalt(saltRounds, () => (err, salt) => {
      if (err) return next(err)
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err)
        user.password = hash
        next()
      })
    })
  } else {
    next()
  }
})

/** 비밀번호 일치 확인 */
userSchema.methods.comparePassword = (plainPassword, cb) => {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err)
    cb(null, isMatch)
  })
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

userSchema.statics.findByToken = function (token, cb) {
  let user = this
  //토큰을 decode 한다.
  jwt.verify(token, 'secretToken', function (err, decoded) {
    //유저 아이디를 이용해서 유저를 찾은 다음
    //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인

    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err)
      cb(null, user)
    })
  })
}

const User = mongoose.model('Usersecond', userSchema)

module.exports = { User }
