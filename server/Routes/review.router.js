
// ** Router for the /review Page

// imports
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST response /review

router.post('/', (req, res) => {
    console.log('/review match body:', req.body);

    let queryText = `INSERT INTO "patrolreports" 
                    (
                    "trooperid", 
                    "squadron", 
                    "unitnumber",
                    "starsystem",
                    "baselocation",
                    "weapon",
                    "wcondition",
                    "acondition",
                    "encounters",
                    "comments"
                    )
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;

    pool.query(queryText, [
                        req.body.trooperid, 
                        req.body.squadron, 
                        req.body.unitnumber,
                        req.body.starsystem,
                        req.body.baselocation,
                        req.body.weapon,
                        req.body.wcondition,
                        req.body.acondition,
                        req.body.encounters,
                        req.body.comments

                ]).then((result) => {
                    console.log(`send success!`);
                    res.sendStatus(201);
                }).catch((error) => {
                    console.log(`server /review post error`);
                    res.sendStatus(500);
                });
});

// GET for Admin page

router.get('/', (req, res) => {
    console.log(`GET /review`);

    let queryText = 'SELECT * FROM "patrolreports";';

    pool.query(queryText).then((result) => {
        console.log(`success /review GET`);
        res.send(result.rows);
    }).catch((error) => {
        console.log(`error in /review GET`, error);
        res.sendStatus(500);
    });
});


// DELETE report

router.delete('/:id', (req, res) => {
    console.log(`deleting report`, req.params.id);

    let queryText = 'DELETE FROM "patrolreports" WHERE "id" = $1;';

    
    pool.query(queryText, [req.params.id]).then((result) => {
        console.log(`success in delete`);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`error in delete`, error);
        res.sendStatus(500);
    });
});


// exports

module.exports = router;
