
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pictures').del()
    .then(function () {
      // Inserts seed entries
      return knex('pictures').insert([
        {pictureUrl:"http://arizonasonoranewsservice.com/wordpress/wp-content/uploads/2014/11/fish-1.jpg", trip_id: 1, altText: "Rivers"},
        {pictureUrl: "https://images.unsplash.com/photo-1519405454454-ce8eb90055f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80", trip_id: 1, altText: "Body of water"},
        {pictureUrl:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", trip_id: 1, altText: "Some more water"},
        {pictureUrl: "https://images.unsplash.com/photo-1519405454454-ce8eb90055f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80", trip_id: 2, altText: "Body of water"},
        {pictureUrl:"http://arizonasonoranewsservice.com/wordpress/wp-content/uploads/2014/11/fish-1.jpg", trip_id: 2, altText: "Rivers"},
        {pictureUrl:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", trip_id: 2, altText: "Some more water"},
        {pictureUrl:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", trip_id: 3, altText: "Some more water"},
        {pictureUrl: "https://images.unsplash.com/photo-1519405454454-ce8eb90055f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80", trip_id: 3, altText: "Body of water"},
        {pictureUrl:"http://arizonasonoranewsservice.com/wordpress/wp-content/uploads/2014/11/fish-1.jpg", trip_id: 3, altText: "Rivers"}
      
      ]);
    });
};
