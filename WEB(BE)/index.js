const app = require('express')()

app.get('/', (req,res) => {
    res.send("Start🙌")
})

app.listen(3000, () => {
    console.log("서버가 작동중입니다~🎶")
})