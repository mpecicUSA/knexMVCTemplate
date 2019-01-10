const knex = require("../db/knex.js");

module.exports = {
    // CHANGE ME TO AN ACTUAL FUNCTION
        index: function(req, res) {
            knex('pictures').then((results)=> {
                res.json(results);
            })
        },
        add: function(req, res) {
            console.log(req.body)
            knex('pictures').insert({
                trip_id: req.body.trip_id,
                pictureUrl: req.body.pictureUrl
                }).then((photos) => {
                res.json(photos)
            })
        }
    }
    
 