import { Router } from "express";
import { getUserCtrl, postUserCtrl } from "../controllers/user";
import { checkJwt } from "../middleware/session";

const router = Router()

router.get('/',checkJwt, getUserCtrl)
router.post('/',checkJwt, postUserCtrl)

export {router}