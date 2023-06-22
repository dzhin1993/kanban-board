import Router from 'express'
import Controller from "../controllers/controller.js";

const router = new Router();

router.post("/", Controller.create);

router.put("/:id", Controller.update);

router.put("/:id/status/:status", Controller.changeStatus);

router.delete("/:id", Controller.delete);

router.get("/", Controller.findAll);

router.get("/:id", Controller.findOne);

export default router;
