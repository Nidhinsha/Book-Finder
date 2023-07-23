import express, {Express, Request, Response} from 'express';
const router = express.Router()
const bookController = require("../controller/bookController")

router.route("/search").get(bookController.searchBook)
module.exports = router