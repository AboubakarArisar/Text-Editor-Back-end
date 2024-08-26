import express from "express";
import DocumentController from "../controller/document.controller";

const router = express.Router();
const documentController = new DocumentController();

router.post("/", documentController.createDocument);
router.get("/", documentController.getDocuments);
router.get("/:id", documentController.getDocument);
router.put("/:id", documentController.updateDocument);
router.delete("/:id", documentController.deleteDocument);

export default router;
