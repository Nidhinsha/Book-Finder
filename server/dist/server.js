"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bodyParser = require("body-parser");
const app = (0, express_1.default)();
const port = 5000;
app.use(bodyParser.json());
app.use((0, cors_1.default)());
const bookRouter = require("./router/book");
app.use("/api", bookRouter);
app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
