import { Router } from "express";
import publicController from "../controller/publicRoute.js";
// import authController from "../controller/auth.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import authController from "../controller/auth.js";
import upload from "../controller/upload.js";
import multer from "multer";
import uploadPublic from "../middleware/upload.js";

const apiRoutes = Router()

const PORT =8080;


apiRoutes.get('/', publicController.get)
apiRoutes.post('/', publicController.post)

apiRoutes.post('/register', authController.register)
apiRoutes.post('/login', authController.login)


apiRoutes.post('/upload', uploadPublic.single('profilePicture'),upload)

// apiRoutes.post('/register', authController.register)
// apiRoutes.post('/login', authController.login)

// apiRoutes.get('/public', authController. publicController)
// apiRoutes.get('/protected', isAuthenticated,authController.protectedController)



export default apiRoutes