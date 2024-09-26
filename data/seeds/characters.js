exports.seed = function(knex) {
    return knex('characters').truncate()
      .then(function () {
        return knex('characters').insert([
          { name: 'nobara' },
          { name: 'zoro' },
          { name: 'solid snake' }
        ]);
      });
  };