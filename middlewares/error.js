"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
};
exports.default = error;
