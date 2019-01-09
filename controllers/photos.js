const knex = require("../db/knex.js");

module.exports = {
    // CHANGE ME TO AN ACTUAL FUNCTION
        index: function(req, res) {
            knex('pictures').then((results)=> {
                res.json(results);
            })
        },
    }
    