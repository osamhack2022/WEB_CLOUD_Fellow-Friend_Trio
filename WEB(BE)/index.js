const app = require('express')()

const usersRouter = require('./routes/users')

app.get('/', (req,res) => {
    res.send("Default Pages")
})

app.use("/users", usersRouter)
app.use("/chat", usersRouter);

app.listen(3000, () => {
    console.log("서버가 작동중입니다~🎶")
})