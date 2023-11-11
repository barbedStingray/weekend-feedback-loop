
// ** Router for the /review Page

// imports
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST response /review

router.post('/', (req, res) => {
    console.log('/review match body:', req.body);

    let queryText = `INSERT INTO "feedback" 
                    ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;

    pool.query(queryText, [req.body.feeling, 
                        req.body.understanding, 
                        req.body.support, 
                        req.body.comments
                ]).then((result) => {
                    console.log(`send success!`);
                    res.sendStatus(201);
                }).catch((error) => {
                    console.log(`server /review post error`);
                    res.sendStatus(500);
                });
});



// exports

module.exports = router;
