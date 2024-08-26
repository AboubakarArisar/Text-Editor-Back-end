"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = __importDefault(require("./connect"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const document_routes_1 = __importDefault(require("./routes/document.routes"));
const comment_routes_1 = __importDefault(require("./routes/comment.routes"));
const share_routes_1 = __importDefault(require("./routes/share.routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
(0, connect_1.default)().then(() => {
    app.use("/users", user_routes_1.default);
    app.use("/documents", document_routes_1.default);
    app.use("/comments", comment_routes_1.default);
    app.use("/shares", share_routes_1.default);
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});
app.get("/", (req, res) => {
    res.send("Text editor is live");
});
