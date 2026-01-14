import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());

// Point d'entrée pour toutes les routes de l'API
app.use("/api", routes);

export default app;

