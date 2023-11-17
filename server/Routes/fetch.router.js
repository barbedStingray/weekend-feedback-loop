
// **  /fetch router

const express = require('express');
const fetchRouter = express.Router();
const pool = require('../modules/pool.js');

// GET starsystmes

fetchRouter.get('/', (req, res) => {
    console.log(`in server GET /fetch`);

    let queryText = `SELECT * FROM "starsystems";`;

    pool.query(queryText).then((result) => {
        console.log(`success /fetch starsystems`);
        res.send(result.rows);
    }).catch((error) => {
        console.log(`ERROR /fetch starsystems`, error);
        res.sendStatus(500);
    });
});

module.exports = fetchRouter;
