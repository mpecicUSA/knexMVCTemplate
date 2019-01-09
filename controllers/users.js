const knex = require("../db/knex.js");

module.exports = {
    // CHANGE ME TO AN ACTUAL FUNCTION
        index: function(req, res) {
            knex('users').where("id", 1).then((results)=> {
                res.json(results[0]);
            })
        },
    }
    