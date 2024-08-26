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
const users_model_1 = __importDefault(require("../models/users.model"));
class UserService {
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_model_1.default.create(data);
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return users_model_1.default.find();
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_model_1.default.findById(id);
        });
    }
    updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_model_1.default.findByIdAndUpdate(id, data, { new: true });
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_model_1.default.findByIdAndDelete(id);
        });
    }
    loginUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_model_1.default.findOne({ email });
        });
    }
}
exports.default = UserService;
