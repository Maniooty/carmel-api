import express from "express"

const app = express()
const port = 6969

app.get('/', (re, res) => {
    res.json({ msg: "Hello world" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})