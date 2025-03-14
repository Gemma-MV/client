import express from "express";
import genericController from "./controllers/generic.controller";

const app = express();

app.get("/:a", genericController.getInit)

app.listen(3000);