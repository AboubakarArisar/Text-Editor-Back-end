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
const share_model_1 = __importDefault(require("../models/share.model"));
class ShareService {
    createShare(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return share_model_1.default.create(data);
        });
    }
    getShares() {
        return __awaiter(this, void 0, void 0, function* () {
            return share_model_1.default.find();
        });
    }
    getShare(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return share_model_1.default.findById(id);
        });
    }
    updateShare(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return share_model_1.default.findByIdAndUpdate(id, data, { new: true });
        });
    }
    deleteShare(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return share_model_1.default.findByIdAndDelete(id);
        });
    }
}
exports.default = ShareService;
