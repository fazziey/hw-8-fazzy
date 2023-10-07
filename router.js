const express = require("express");
const router = express.Router();
const pool = require("./queries.js");

router.get("/film", (req, res) => {
  pool.query("SELECT * FROM list_film", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
});

router.get("/film/category", (req, res) => {
  pool.query("SELECT * FROM category_film", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
});

router.get("/film/:id", (req, res) => {
  pool.query(
    "SELECT * FROM list_film WHERE id_film = " + String(req.params.id) + ";",
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.rows);
    }
  );
});

router.get("/film/category/:name", (req, res) => {
  pool.query(
    "SELECT list_film.title, category_film.name FROM list_film INNER JOIN category_film ON list_film.id_category = category_film.id WHERE category_film.name = " +
      "'" +
      String(req.params.name) +
      "'" +
      ";",
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.rows);
    }
  );
});

module.exports = router;
