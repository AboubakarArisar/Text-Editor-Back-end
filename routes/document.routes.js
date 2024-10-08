"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const document_controller_1 = __importDefault(require("../controller/document.controller"));
const router = express_1.default.Router();
const documentController = new document_controller_1.default();
router.post("/", documentController.createDocument);
router.get("/", documentController.getDocuments);
router.get("/:id", documentController.getDocument);
router.put("/:id", documentController.updateDocument);
router.delete("/:id", documentController.deleteDocument);
exports.default = router;
