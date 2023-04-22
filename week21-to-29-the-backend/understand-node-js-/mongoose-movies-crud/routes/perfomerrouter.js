import { Router } from 'express'
import * as PC from '../controlers/perfomercontroler.js'
const router = Router()

router.get('/add' , PC.showPerfomer)

router.post('/add' ,PC.addperfomer)


export {
    router
}