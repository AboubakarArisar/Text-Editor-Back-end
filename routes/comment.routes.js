"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comment_controller_1 = __importDefault(require("../controller/comment.controller"));
const auth_authenticate_1 = __importDefault(require("../middlewares/auth.authenticate"));
const router = express_1.default.Router();
const commentController = new comment_controller_1.default();
router.post("/", auth_authenticate_1.default, commentController.createComment);
router.get("/", commentController.getComments);
router.get("/:id", commentController.getComment);
router.put("/:id", auth_authenticate_1.default, commentController.updateComment);
router.delete("/:id", auth_authenticate_1.default, commentController.deleteComment);
exports.default = router;
