const app = require('express')()
const session = require('express-session')
const http = require('http')
const cors = require('cors')
const server = http.createServer(app)
const { Server } = require('socket.io')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const bodyParser = require('body-parser')
const userRouter = require('./src/routes/user')

const config = require('./src/config/key.js')
mongoose
  .connect(config.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err))

const io = new Server(server, {
  path: '/example.com',
  cors: {
    origin: '*',
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
})

app.get('/', (req, res) => {
  res.send('Default Pages')
})
// cors 방지
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
)

// session 연결(mongoStore 사용)
app.use(
  session({
    name: 'armynumber',
    secret: config.SECRET_TOKEN,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: config.MONGO_STORE,
      collectionName: 'sessions',
      saveUninitialized: false,
    }),
    cookie: { maxAge: 3.6e6 * 24 },
  }),
)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const room = io.of('/room')

// chat 연결
room.on('connection', (socket) => {
  const req = socket.request
  const { body } = req
  socket.on('joinRoom', function (msg) {
    if (req.session.army_number) {
      // joinRoom을 클라이언트가 emit 했을 시
      const roomId = msg
      socket.join(roomId) // 클라이언트를 msg에 적힌 room으로 참여 시킴
    }
  })

  socket.to(body.roomId).emit('join', {
    user: 'system',
    chat: `${req.session.name}님이 입장하셨습니다.`,
  })

  socket.on('disconnect', () => {
    console.log('chat 네임스페이스 접속 해제')
    socket.leave(body.roomId)
  })
  // 병사,또래상담병 메시지 보내기
  socket.on('req_message', async (msg) => {
    req.session.role === 'guest'
      ? io.to(body.roomId).emit('guest_message', msg)
      : io.to(body.roomId).emit('counselor_message', msg)
  })
})

app.use('/user', userRouter)

server.listen(config.PORT, () => {
  console.log(`서버가 작동중입니다~🎶`)
})
