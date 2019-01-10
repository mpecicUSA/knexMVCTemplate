
exports.up = function(knex, Promise) {
    return knex.schema.createTable('trips',(table)=>{
    table.increments();
    table.string('tripName')
    table.date('tripDate')
    table.boolean("starred");
    table.integer('catches')
    table.string('userComments');
    table.string("pictureUrl");
    table.integer("user_id")
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index();
    table.timestamps(true,true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('trips');
};
