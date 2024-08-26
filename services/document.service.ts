import Document from "../models/document.model";

class DocumentService {
  async createDocument(data: any) {
    return Document.create(data);
  }

  async getDocuments() {
    return Document.find();
  }

  async getDocument(id: string) {
    return Document.findById(id);
  }

  async updateDocument(id: string, data: any) {
    return Document.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteDocument(id: string) {
    return Document.findByIdAndDelete(id);
  }
}

export default DocumentService;
