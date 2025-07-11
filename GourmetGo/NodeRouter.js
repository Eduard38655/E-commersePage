import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
 const app = express();
 

 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

 

 

app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en puerto 3000");
});
