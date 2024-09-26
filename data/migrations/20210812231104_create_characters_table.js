
exports.up = function(knex) {
    return knex.schema.createTable('characters', tbl => {
        tbl.increments('character_id')
        tbl.string('name').unique().notNullable()
     })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('characters')
};
