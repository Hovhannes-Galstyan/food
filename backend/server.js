import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import multer from "multer";

const app = express();
const PORT = 4200;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
