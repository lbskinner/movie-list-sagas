const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// get all movies
router.get("/", (req, res) => {
  const queryText = `SELECT "movies".id, "movies".title, "movies".poster, 
  "movies".description, array_agg(COALESCE("genres".name, 'N/A')) as "genres" 
  FROM "genres" JOIN "movie_genre" ON "movie_genre".genre_id = "genres".id
  RIGHT JOIN "movies" ON "movies".id = "movie_genre".movie_id 
  GROUP BY "movies".id ORDER BY "movies".title;`;
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

// get movie details
router.get("/details/:id", (req, res) => {
  const queryText = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, 
  json_agg(json_build_object('genre_name', COALESCE("genres".name, 'N/A'), 'movie_genre_id', "movie_genre".id)) as "genres"
  FROM "genres" JOIN "movie_genre" ON "movie_genre".genre_id = "genres".id
  RIGHT JOIN "movies" ON "movies".id = "movie_genre".movie_id 
  WHERE "movies".id = $1 GROUP BY "movies".id;`;
  pool
    .query(queryText, [req.params.id])
    .then((responseFromDb) => {
      res.send(responseFromDb.rows);
    })
    .catch((error) => {
      console.log("GET DETAILS ERROR: ", error);
      res.sendStatus(500);
    });
});

// put/update movies
router.put("/edit", (req, res) => {
  const movieData = req.body;
  const queryText = `UPDATE "movies" 
SET "title" = $1, "description" = $2
WHERE "id" = $3;`;
  pool
    .query(queryText, [movieData.title, movieData.description, movieData.id])
    .then((responseFromDb) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("PUT ERROR: ", error);
      res.sendStatus(500);
    });
});

// post/add genre
router.post("/genre", (req, res) => {
  const queryText = `INSERT INTO "movie_genre" ("movie_id", "genre_id")
    VALUES ($1, $2);`;
  const movieGenreData = req.body;
  pool
    .query(queryText, [movieGenreData.movie_id, movieGenreData.genre_id])
    .then((responseFromDb) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("ADD GENRE ERROR: ", error);
      res.sendStatus(500);
    });
});

// delete genre
router.delete("/genre/:id", (req, res) => {
  const movieGenreId = req.params.id;
  const queryText = `DELETE FROM "movie_genre" WHERE "id" = $1;`;
  pool
    .query(queryText, [movieGenreId])
    .then((responseFromDb) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("DELETE GENRE ERROR: ", error);
      res.sendStatus(500);
    });
});

module.exports = router;
