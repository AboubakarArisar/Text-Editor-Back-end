import Comment from "../models/comment.model";

class CommentService {
  async createComment(data: any) {
    return Comment.create(data);
  }

  async getComments() {
    return Comment.find();
  }

  async getComment(id: string) {
    return Comment.findById(id);
  }

  async updateComment(id: string, data: any) {
    return Comment.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteComment(id: string) {
    return Comment.findByIdAndDelete(id);
  }
}

export default CommentService;
