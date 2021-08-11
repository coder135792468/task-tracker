import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./backend/config/db.js";
import cors from "cors";
import taskRoute from "./backend/routes/taskRoute.js";
import path from "path";

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/task", taskRoute);

const __dirname = path.resolve();
// Serve only the static files form the dist director
app.use(express.static(__dirname + "/dist/taskstracker"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/taskstracker/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(
  process.env.PORT || 8080,
  console.log(`Server is running`.yellow.bold.underline)
);
