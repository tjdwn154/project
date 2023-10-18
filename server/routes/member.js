const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/api/members", (req, res) => {
  db.query("SELECT * FROM member", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
