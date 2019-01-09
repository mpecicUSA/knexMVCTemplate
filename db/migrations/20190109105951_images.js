
exports.up = function(knex, Promise) {
    return knex.schema.createTable("pictures", (table)=>{
        table.increments();
        table.string('pictureUrl')
        table.integer('trip_id')
            .notNullable()
            .references('id')
            .inTable('trips')
            .onDelete('CASCADE')
            .index();
        table.string('altText');
        table.timestamps(true,true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pictures');
};
