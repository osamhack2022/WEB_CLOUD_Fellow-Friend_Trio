const app = require('express')()
const http = require('http')
const server = http.createServer(app)
// const { Server } = require('socket.io')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const config = require('./src/config/key')
const config = require('./src/config/key.js')
const mongodb = mongoose
  .connect(config.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err))

// const io = new Server(server, {
//   path: '/example.com',
//   cors: {
//     origin: '*',
//     allowedHeaders: ['my-custom-header'],
//     credentials: true,
//   },
// })

// const chat = require('./lib/chat')
const userRouter = require('./src/routes/user')
const chatRouter = require('./src/routes/chat')

app.get('/', (req, res) => {
  res.send('Default Pages')
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/chat', chatRouter)

// socket.io 는 로그인 기능 후에 만들예정.
// io.on('connection', (socket) => {
//   chat(socket)
// })

server.listen(config.PORT, () => {
  console.log(`서버가 작동중입니다~🎶`)
})
