import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./config/db.js";
import cors from "cors";
import { UserAppears } from "./middlewares/handlingError.js";

dotenv.config();

import {
  getUsers,
  getOneUser,
  postUser,
  deleteUser,
  updateUser,
} from "./controllers/main-controllers.js";

const app = express();
let PORT = process.env.PORT || 5021;

app.use(express.json());
app.use(cors());

//connect to MONDO DB
await connectMongoDB();

// Routes
app.get("/api/users", getUsers);

app.get("/api/users/:id", UserAppears, getOneUser);

app.post("/api/users", postUser);

app.put("/api/users/:id", UserAppears, updateUser);

app.delete("/api/users/:id", UserAppears, deleteUser);

//listens to PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
