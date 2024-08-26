import Share from "../models/share.model";

class ShareService {
  async createShare(data: any) {
    return Share.create(data);
  }

  async getShares() {
    return Share.find();
  }

  async getShare(id: string) {
    return Share.findById(id);
  }

  async updateShare(id: string, data: any) {
    return Share.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteShare(id: string) {
    return Share.findByIdAndDelete(id);
  }
}

export default ShareService;
