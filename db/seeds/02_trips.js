
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {tripName: "Rio Verde", tripDate: "12/25/2018", catches:2,  starred: true, userComments: "Cooler weather, light rainfail, used jerk bait, caught 1 largemouth and one carp, carp was hooked by accident.", user_id: "1"},
        {tripName: "Tempe Town Lake", tripDate: "01/02/2019", catches:0, starred: false, userComments: "No fish today.", user_id: "1"},
        {tripName: "Lower Salt River", tripDate: "11/28/2018", catches:0, starred: false, userComments: "Cooler weather, light rainfail, used jerk bait, caught 1 largemouth and one carp, carp was hooked by accident.", user_id: "1"},
        {tripName: "Rio Verde 1", tripDate: "12/26/2018", catches:0, starred: false, userComments: "Views were great. No Fish today ", user_id: "2"},
        {tripName: "Rio Verde 2", tripDate: "12/27/2018", catches:0, starred: true, userComments: "Tried worms, no luck", user_id: "2"},
        {tripName: "Rio Verde 3", tripDate: "12/25/2018", catches:35, starred: false, userComments: "Caught every fish in the river. Fire. ", user_id: "2"}
      ]);
    });
};
