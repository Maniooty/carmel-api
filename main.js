import express from "express"

const app = express()
const port = 6969

app.get('/', (re, res) => {
    res.json({ msg: "Hello" })
})

app.get('/users', (req, res) => {
    res.json({ msg: "Hello world" })
})

app.post('/register', (req, res) => {

})

app.post('/login', (req, res) => {

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})