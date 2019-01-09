
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users',(table)=>{
        table.increments();
        table.string('firstName');
        table.string('lastName');
        table.string('userName');
        table.string('userProfilePicURL');
        table.string('password');
        table.timestamps(true,true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
