const bands = [
  {band_id: 1, band_name: 'Opeth', genre: 'Progressive Metal'},
  {band_id: 2, band_name: 'TesseracT', genre: 'Progressive Metal'},
  {band_id: 3, band_name: 'Umphreys McGee', genre: 'Jam Band'},
  {band_id: 4, band_name: 'Consider the Source', genre: 'Jazz fusion'},
  {band_id: 5, band_name: 'Emancipator', genre: 'downtempo'},
]

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bands').truncate()
    .then(function () {
      return knex('bands').insert(bands)
    })
};
