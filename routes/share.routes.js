"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const share_controller_1 = __importDefault(require("../controller/share.controller"));
const router = express_1.default.Router();
const shareController = new share_controller_1.default();
router.post("/", shareController.createShare);
router.get("/", shareController.getShares);
router.get("/:id", shareController.getShare);
router.put("/:id", shareController.updateShare);
router.delete("/:id", shareController.deleteShare);
exports.default = router;
