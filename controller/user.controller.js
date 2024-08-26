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
const user_service_1 = __importDefault(require("../services/user.service"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    constructor() {
        this.userService = new user_service_1.default();
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
                const user = yield this.userService.createUser(Object.assign(Object.assign({}, req.body), { password: hashedPassword }));
                res.json(user);
            }), error_1.default);
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const users = yield this.userService.getUsers();
                res.json(users);
            }), error_1.default);
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const user = yield this.userService.getUser(req.params.id);
                res.json(user);
            }), error_1.default);
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const user = yield this.userService.updateUser(req.params.id, req.body);
                res.json(user);
            }), error_1.default);
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                yield this.userService.deleteUser(req.params.id);
                res.json({ message: "User deleted successfully" });
            }), error_1.default);
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, catchAsyncError_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                const user = yield this.userService.getUser(req.body.email);
                if (!user)
                    return res.status(401).send("Invalid email or password.");
                const isValidPassword = yield bcrypt_1.default.compare(req.body.password, user.password);
                if (!isValidPassword)
                    return res.status(401).send("Invalid email or password.");
                const secretKey = process.env.SECRET_KEY || "defaultSecretKey";
                const token = jsonwebtoken_1.default.sign({ _id: user._id }, secretKey);
                res.json({ token });
            }), error_1.default);
        });
    }
}
exports.default = UserController;
