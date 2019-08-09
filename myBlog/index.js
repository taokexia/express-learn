const express = require("express")
const app = express()
const indexRouter = require("./router/index")
const userRouter = require("./router/users")

app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(3000)
