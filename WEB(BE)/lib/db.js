const mongoose = require('mongoose')
/** MonogoDB 에 접근*/
require('dotenv').config()
const { mongoDB } = process.env
mongoose
  .connect(mongoDB, {
    // useNewUrlPaser: true,
    // useUnifiedTofology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log('MongoDB conected'))
  .catch((err) => {
    console.log(err)
  })
