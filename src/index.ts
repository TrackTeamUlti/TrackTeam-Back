import "dotenv/config";
import app from "./app";

const port = Number(process.env.PORT) || 3030;

app.listen(port, () => {
  console.log(`API démarrée sur http://localhost:${port}`);
});