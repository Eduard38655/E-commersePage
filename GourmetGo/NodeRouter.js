import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
 const app = express();
 

 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Allow=['http://localhost:3000/','https://eduard38655.github.io/E-commersePage/']
 const corsOptions = {
    origin:Allow,
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

 

 

app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en puerto 3000");
});
