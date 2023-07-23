require('dotenv').config();
import express, {Express, Request, Response} from 'express';
const bodyParser = require("body-parser")

const app: Express = express();
const port = 5000;
app.use(bodyParser.json())

const bookRouter = require("./router/book")

app.use("/api", bookRouter)

app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`);
});