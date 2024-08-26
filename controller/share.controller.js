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
const share_service_1 = __importDefault(require("../services/share.service"));
class ShareController {
    constructor() {
        this.shareService = new share_service_1.default();
    }
    createShare(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const share = yield this.shareService.createShare(req.body);
                res.json(share);
            }), error_1.default);
        });
    }
    getShares(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const shares = yield this.shareService.getShares();
                res.json(shares);
            }), error_1.default);
        });
    }
    getShare(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const share = yield this.shareService.getShare(req.params.id);
                res.json(share);
            }), error_1.default);
        });
    }
    updateShare(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const share = yield this.shareService.updateShare(req.params.id, req.body);
                res.json(share);
            }), error_1.default);
        });
    }
    deleteShare(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                yield this.shareService.deleteShare(req.params.id);
                res.json({ message: "Share deleted successfully" });
            }), error_1.default);
        });
    }
}
exports.default = ShareController;
