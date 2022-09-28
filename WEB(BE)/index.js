const app = require('express')()
const chat = require("./lib/chat")
const usersRouter = require('./routes/users')
const chatRouter = require('/routes/chat')

require("dotenv").config();
const { PORT } = process.env;

app.get('/', (req,res) => {
    res.send("Default Pages")
})

io.on("connection", (socket) => {
    chat.ChatingInput(socket);
})
app.use("/users", usersRouter)
app.use("/chat", chatRouter);

app.listen(PORT, () => {
  console.log("서버가 작동중입니다~🎶");
});