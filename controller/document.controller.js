"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsyncError_1 = __importDefault(require("../middlewares/catchAsyncError"));
const error_1 = __importDefault(require("../middlewares/error"));
const document_service_1 = __importDefault(require("../services/document.service"));
class DocumentController {
    constructor() {
        this.documentService = new document_service_1.default();
    }
    createDocument(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const document = yield this.documentService.createDocument(req.body);
                res.json(document);
            }), error_1.default);
        });
    }
    getDocuments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const documents = yield this.documentService.getDocuments();
                res.json(documents);
            }), error_1.default);
        });
    }
    getDocument(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const document = yield this.documentService.getDocument(req.params.id);
                res.json(document);
            }), error_1.default);
        });
    }
    updateDocument(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const document = yield this.documentService.updateDocument(req.params.id, req.body);
                res.json(document);
            }), error_1.default);
        });
    }
    deleteDocument(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                yield this.documentService.deleteDocument(req.params.id);
                res.json({ message: "Document deleted successfully" });
            }), error_1.default);
        });
    }
}
exports.default = DocumentController;
