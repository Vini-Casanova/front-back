import { Router } from "express";
import TaskController from "../controller/TaskController.js";

const router = Router();

router.use("/task", TaskController);

export default router;