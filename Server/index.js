import cookieparser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cookieparser());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "server Connected" });
});

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log("server Started at Port", port);
});
