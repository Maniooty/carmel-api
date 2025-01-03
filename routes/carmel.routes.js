import express from "express"

const router = express.Router()

router.get('/users', (req, res) => {
    res.send("Gell all users")
})

router.post('/register', (req, res) => {
    res.send("Register Successfull")
})

router.post('/login', (req, res) => {
    res.send("Login Successfull")
})

export default router