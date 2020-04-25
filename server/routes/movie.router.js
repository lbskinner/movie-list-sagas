const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// get all movies
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "movies" ORDER BY "title" ASC;`;
  pool
    .query(queryText)
    .then((responseFromDb) => {
      res.send(responseFromDb.rows);
    })
    .catch((error) => {
      console.log("GET ERROR: ", error);
      res.sendStatus(500);
    });
});
// put/update movies

// get movie details

module.exports = router;
