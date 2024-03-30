const express = require("express")
const cors = require("cors")
const proxy = require("express-http-proxy")

const app = express()
const PORT=process.env.PORT

app.use(cors());
app.use(express.json())

app.use('/users', proxy("http://localhost:4001"))
app.use('/products', proxy("http://localhost:4002"))
app.use('/orders', proxy("http://localhost:4003"))
app.use('/admin', proxy("http://localhost:4004"))
app.use('/cart', proxy("http://localhost:4005"))

app.listen(PORT, () => {
    console.log(`Api gateway is running at....... ${PORT}`)
})