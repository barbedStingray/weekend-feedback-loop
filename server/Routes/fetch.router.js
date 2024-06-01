
// **  /fetch router

const express = require('express');
const fetchRouter = express.Router();
const pool = require('../modules/pool.js');

// GET starsystmes

// /fetch
fetchRouter.get('/', (req, res) => {
    console.log(`in server GET /fetch`);

    let queryText = `SELECT * FROM "star_systems";`;

    pool.query(queryText).then((result) => {
        console.log(`success /fetch starsystems`);
        res.send(result.rows);
    }).catch((error) => {
        console.log(`ERROR /fetch starsystems`, error);
        res.sendStatus(500);
    });
});

// /fetch/bases
fetchRouter.get('/bases/:id', (req, res) => {
    let queryText = `
    SELECT "operational_bases"."base" 
    FROM "system_bases"
    JOIN "operational_bases" ON "operational_bases"."id" = "system_bases"."base_id"
    JOIN "star_systems" ON "star_systems"."id" = "system_bases"."starsystems_id"
    WHERE "star_systems"."id" = $1
    ;`;
    console.log('req.params', req.params.id);

    pool.query(queryText, [req.params.id]).then((result) => {
        console.log('base load success', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in bases', error);
        res.sendStatus(500);
    });
});

module.exports = fetchRouter;
