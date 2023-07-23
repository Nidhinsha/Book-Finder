"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
const app = (0, express_1.default)();
const port = 5000;
app.use(bodyParser.json());
const bookRouter = require("./router/book");
app.use("/api", bookRouter);
app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
