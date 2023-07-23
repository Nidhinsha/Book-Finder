import express, { Router } from 'express';
const router: Router = express.Router()
const bookController = require("../controller/bookController")

router.route("/search").get(bookController.searchBook)

module.exports = router