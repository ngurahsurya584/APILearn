import express from "express";
import { getNotifs, getNotifID, saveNotif, updateNotif, deleteNotif } from "../controllers/notificationController.js";
const router = express.Router();

//getall
router.get('/', getNotifs);
//create
router.post('/', saveNotif);
//getbyid
router.get('/:id', getNotifID);
//update
router.patch('/:id', updateNotif);
//delete
router.delete('/:id', deleteNotif);

export default router;

//module.exports = router