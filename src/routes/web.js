import express from 'express'
import { getAboutPage, getHomePage, createNewUser, getDetail, deleteUser, editUser, updateUser } from '../controller/services/homeController'

const router = express.Router()

const initWebRoute = (app) => {
    router.get('/', getHomePage)
    router.get('/about', getAboutPage)
    router.post('/create-new-user', createNewUser)
    router.get('/detail-user/:userId', getDetail)
    router.get('/delete-user/:userId', deleteUser)
    router.get('/edit-user/:userId', editUser)
    router.post('/update-user', updateUser)
    //URL Start with '/'
    return app.use('/', router)

}

export {initWebRoute}