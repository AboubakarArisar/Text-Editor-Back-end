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
const comment_service_1 = __importDefault(require("../services/comment.service"));
class CommentController {
    constructor() {
        this.commentService = new comment_service_1.default();
    }
    createComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const comment = yield this.commentService.createComment(req.body);
                res.json(comment);
            }), error_1.default);
        });
    }
    getComments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const comments = yield this.commentService.getComments();
                res.json(comments);
            }), error_1.default);
        });
    }
    getComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const comment = yield this.commentService.getComment(req.params.id);
                res.json(comment);
            }), error_1.default);
        });
    }
    updateComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const comment = yield this.commentService.updateComment(req.params.id, req.body);
                res.json(comment);
            }), error_1.default);
        });
    }
    deleteComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                yield this.commentService.deleteComment(req.params.id);
                res.json({ message: "Comment deleted successfully" });
            }), error_1.default);
        });
    }
}
exports.default = CommentController;
