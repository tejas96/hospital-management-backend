import dontEnv from "dotenv";
import app from "./routes";

dontEnv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
