import catchAsyncError from "../middlewares/catchAsyncError";
import error from "../middlewares/error";
import DocumentService from "../services/document.service";

class DocumentController {
  private documentService: DocumentService;

  constructor() {
    this.documentService = new DocumentService();
  }

  async createDocument(req: any, res: any) {
    return catchAsyncError(async () => {
      const document = await this.documentService.createDocument(req.body);
      res.json(document);
    }, error);
  }

  async getDocuments(req: any, res: any) {
    return catchAsyncError(async () => {
      const documents = await this.documentService.getDocuments();
      res.json(documents);
    }, error);
  }

  async getDocument(req: any, res: any) {
    return catchAsyncError(async () => {
      const document = await this.documentService.getDocument(req.params.id);
      res.json(document);
    }, error);
  }

  async updateDocument(req: any, res: any) {
    return catchAsyncError(async () => {
      const document = await this.documentService.updateDocument(
        req.params.id,
        req.body
      );
      res.json(document);
    }, error);
  }

  async deleteDocument(req: any, res: any) {
    return catchAsyncError(async () => {
      await this.documentService.deleteDocument(req.params.id);
      res.json({ message: "Document deleted successfully" });
    }, error);
  }
}

export default DocumentController;
