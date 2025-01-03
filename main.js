import express from "express"
import carmelRoutes from "./routes/carmel.routes.js"

const app = express()
const port = 6969

app.get('/', (re, res) => {
    res.json({ msg: "Hello" })
})

app.use('/carmel', carmelRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})