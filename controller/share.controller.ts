import catchAsyncError from "../middlewares/catchAsyncError";
import error from "../middlewares/error";
import ShareService from "../services/share.service";

class ShareController {
  private shareService: ShareService;

  constructor() {
    this.shareService = new ShareService();
  }

  async createShare(req: any, res: any) {
    return catchAsyncError(async () => {
      const share = await this.shareService.createShare(req.body);
      res.json(share);
    }, error);
  }

  async getShares(req: any, res: any) {
    return catchAsyncError(async () => {
      const shares = await this.shareService.getShares();
      res.json(shares);
    }, error);
  }

  async getShare(req: any, res: any) {
    return catchAsyncError(async () => {
      const share = await this.shareService.getShare(req.params.id);
      res.json(share);
    }, error);
  }

  async updateShare(req: any, res: any) {
    return catchAsyncError(async () => {
      const share = await this.shareService.updateShare(
        req.params.id,
        req.body
      );
      res.json(share);
    }, error);
  }

  async deleteShare(req: any, res: any) {
    return catchAsyncError(async () => {
      await this.shareService.deleteShare(req.params.id);
      res.json({ message: "Share deleted successfully" });
    }, error);
  }
}

export default ShareController;
