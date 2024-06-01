import { Router } from "express";
import * as controller from "./controller.js"

const router=Router();
router.route("/add").post(controller.addname)

export default router;