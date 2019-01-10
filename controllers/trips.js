const knex = require("../db/knex.js");

module.exports = {
// CHANGE ME TO AN ACTUAL FUNCTION
    index: function(req, res) {
        knex('trips').select().where("user_id", 1).then((results)=> {
            res.send(results);
        })
    },
    add: function(req, res) {
        knex('trips').insert({
            tripName: req.body.tripName,
            tripDate: req.body.tripDate,
            catches: req.body.catches, 
            userComments: req.body.userComments,
            pictureUrl: req.body.pictureUrl,
            starred: req.body.starred,
            user_id: 1
            }).then((trips) => {
            res.json(trips)
        })
    }
}
