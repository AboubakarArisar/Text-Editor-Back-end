import express from "express";
import CommentController from "../controller/comment.controller";
import authenticate from "../middlewares/auth.authenticate";

const router = express.Router();
const commentController = new CommentController();

router.post("/", authenticate, commentController.createComment);
router.get("/", commentController.getComments);
router.get("/:id", commentController.getComment);
router.put("/:id", authenticate, commentController.updateComment);
router.delete("/:id", authenticate, commentController.deleteComment);

export default router;
