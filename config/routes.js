//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
const users = require("../controllers/users.js")
const trips = require("../controllers/trips.js")
const photos = require("../controllers/photos.js")

module.exports = function(app){
  app.get('/', template.index);
  app.get('/users/:id', users.index);
  app.get('/trips/:user_id', trips.index);
  app.get('/photos', photos.index)

  app.post('/add', trips.add)
}
