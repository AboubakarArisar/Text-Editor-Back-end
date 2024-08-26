import catchAsyncError from "../middlewares/catchAsyncError";
import error from "../middlewares/error";
import CommentService from "../services/comment.service";

class CommentController {
  private commentService: CommentService;

  constructor() {
    this.commentService = new CommentService();
  }

  async createComment(req: any, res: any) {
    return catchAsyncError(async () => {
      const comment = await this.commentService.createComment(req.body);
      res.json(comment);
    }, error);
  }

  async getComments(req: any, res: any) {
    return catchAsyncError(async () => {
      const comments = await this.commentService.getComments();
      res.json(comments);
    }, error);
  }

  async getComment(req: any, res: any) {
    return catchAsyncError(async () => {
      const comment = await this.commentService.getComment(req.params.id);
      res.json(comment);
    }, error);
  }

  async updateComment(req: any, res: any) {
    return catchAsyncError(async () => {
      const comment = await this.commentService.updateComment(
        req.params.id,
        req.body
      );
      res.json(comment);
    }, error);
  }

  async deleteComment(req: any, res: any) {
    return catchAsyncError(async () => {
      await this.commentService.deleteComment(req.params.id);
      res.json({ message: "Comment deleted successfully" });
    }, error);
  }
}

export default CommentController;
