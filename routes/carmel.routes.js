import express from "express"
import { CarmelIndex, CarmelLogin, CarmelRegister } from "../controllers/carmel.controller.js"

const router = express.Router()

router.get('/users', CarmelIndex)

router.post('/register', CarmelRegister)

router.post('/login', CarmelLogin)

export default router