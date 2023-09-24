import express from "express";
import fs from "fs";
import multer from "multer";
import cors from "cors";

import mongoose from "mongoose";
import { handleValidationErrors } from "./utils/index.js";
import { SuperHeroController } from "./controllers/index.js";

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.78f85tc.mongodb.net/superhero?retryWrites=true&w=majority")
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.get("/heros", SuperHeroController.getAll);
app.get("/heros/:id", SuperHeroController.getOne);
app.post("/heros", handleValidationErrors, SuperHeroController.create);
app.patch("/heros/:id", handleValidationErrors, SuperHeroController.update);
app.delete("/heros/:id", handleValidationErrors, SuperHeroController.remove);

app.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
