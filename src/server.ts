import express from "express";
// import "./database/conection";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());


app.get("/", (req, res, next) => {
  res.json({ message: "LOGIN -> olá server está online" });
});
app.listen(3001, () => {
  console.clear();
  console.log("           |-----------|  INIT_NODE  |------------|");
  console.log("           | INIT_NODE rodando na 🚪 porta 3001  |");
  console.log("           |-----------|  INIT_NODE  |------------|");
});
