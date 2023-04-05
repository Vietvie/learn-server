import express from 'express'
import { getAlluses , createNewUser, deleteUser} from '../controller/services/apiController'

const router = express.Router()

const initApiRoute = (app) => {
    router.get('/users', getAlluses) //Read Data
    router.post('/create-new-user', createNewUser)
    router.delete('/detele-user/:id', deleteUser)

    //URL Start with '/'
    return app.use('/api/v1', router)
    

}

export {initApiRoute}