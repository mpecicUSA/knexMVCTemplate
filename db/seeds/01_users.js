
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userName: 'mpecic', firstName: 'Marko', lastName: "Pecic", password: "m", userProfilePicURL:"https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg"},
        {userName: 'lromero', firstName: 'Lucas', lastName: "Romero", password: "l", userProfilePicURL:"https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg"}
      ]);
    });
};
