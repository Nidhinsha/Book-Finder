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
const axios_1 = __importDefault(require("axios"));
exports.searchBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const q = req.query.q;
    if (!q) {
        // Handle the case when q is not provided or is an empty string
        return res.status(400).json({ error: "Search query is missing or empty" });
    }
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        // Handle the case when API key is not provided or is invalid
        return res.status(500).json({ error: "Invalid Google Books API key" });
    }
    try {
        const response = yield axios_1.default.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&key=${apiKey}`);
        const bookData = response.data.items.map((item) => {
            var _a;
            const volumeInfo = item.volumeInfo;
            const title = volumeInfo.title;
            const description = volumeInfo.description;
            const authors = volumeInfo.authors || [];
            const coverImage = ((_a = volumeInfo.imageLinks) === null || _a === void 0 ? void 0 : _a.thumbnail) || "";
            return {
                title,
                description,
                authors,
                coverImage
            };
        });
        res.send(bookData);
    }
    catch (error) {
        console.error("Error fetching book data", error);
        res.status(500).json({ error: "Error fetching book data" });
    }
});
