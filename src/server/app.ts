import * as bodyParser from "body-parser";
import express from "express";
import expressReactViews from "express-react-views";
import { router } from "./middlewares/router";

const templateOptions = { beautify: true };
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/assets", express.static("/dist"));
app.use(router);
console.log("!!!", __dirname);
app.set("views", "views");
app.set("view engine", "jsx");
app.engine("jsx", expressReactViews.createEngine(templateOptions));

export default app;
