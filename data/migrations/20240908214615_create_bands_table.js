
exports.up = function(knex) {
  return knex.schema.createTable('bands', bands => {
    bands.increments('band_id');
    bands.string('band_name', 255).notNullable().unique();
    bands.string('genre', 128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('bands');
};
