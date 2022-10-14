const app = require('express')()
const session = require('express-session')
const http = require('http')
const cors = require('cors')
const server = http.createServer(app)
// const { Server } = require('socket.io')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const bodyParser = require('body-parser')
// const config = require('./src/config/key')
const config = require('./src/config/key.js')
mongoose
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

app.use(
  cors({
    origin: true,
    credentials: true,
  })
)
app.use(
  session({
    name: 'armynumber',
    secret: process.env.SECRET_TOKEN,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_DB,
      collectionName: 'sessions',
      saveUninitialized: false,
    }),
    cookie: { maxAge: 3.6e6 * 24 },
  })
)

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
