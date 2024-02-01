// routes/schools.js
const express = require("express");
const db = require("../config/db");
const upload = require("../config/multer");

const router = express.Router();

router.post("/addSchool", upload.single("image"), (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  const image = req.file.filename;

  const query =
    "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [name, address, city, state, contact, email_id, image],
    (err, result) => {
      if (err) {
        console.error("MySQL query error:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.json({ message: "School added successfully" });
      }
    }
  );
});

router.get("/schools", (req, res) => {
  const query = "SELECT id, name, address, state ,city, image FROM schools";
  db.query(query, (err, result) => {
    if (err) {
      console.error("MySQL query error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
