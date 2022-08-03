import express from "express";
import cors from "cors";
import { route } from "./routes/routes";

const PORT = 7000;
const app = express();


app.use(cors());
app.use(express.json());
app.use(route);


app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});


