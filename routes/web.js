import express from 'express'
import homeController from "../controller/homeController.js";

const router = express.Router();

router.get('/',homeController.home)
router.post('/', homeController.addData)
router.get('/edit/:id', homeController.editDoc);
router.post('/update/:id', homeController.updateDoc)
router.post('/delete/:id', homeController.deleteDoc);
// router.post('/delete/:id', homeController.updateDoc)

export default router;