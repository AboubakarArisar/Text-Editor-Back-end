import express from "express";
import ShareController from "../controller/share.controller";

const router = express.Router();
const shareController = new ShareController();

router.post("/", shareController.createShare);
router.get("/", shareController.getShares);
router.get("/:id", shareController.getShare);
router.put("/:id", shareController.updateShare);
router.delete("/:id", shareController.deleteShare);

export default router;
