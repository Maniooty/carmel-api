import express from "express"
import { CarmelDelete, CarmelIndex, CarmelLogin, CarmelRegister, CarmelUpdate } from "../controllers/carmel.controller.js"

const router = express.Router()

router.get('/users', CarmelIndex)

router.post('/register', CarmelRegister)

router.post('/login', CarmelLogin)

router.put('/update-user/:id', CarmelUpdate)

router.delete('/delete-user/:id', CarmelDelete)

export default router