import express from "express"
import carmelRoutes from "./routes/carmel.routes.js"
import connectDB from "./lib/db.js"

const app = express()
const port = 6969

app.use(express.json());

app.get('/', (re, res) => {
    res.json({ msg: "Hello" })
})

connectDB()

app.use('/carmel', carmelRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})