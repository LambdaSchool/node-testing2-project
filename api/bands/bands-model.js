const db = require('../../data/dbConfig');

const getAll = () => {
  return db('bands');
};

const getById = async (band_id) => {
  const band = await db('bands')
    .where({ band_id })
    .first();
  return band;
};

const add = async (band) => {
  const [id] = await db('bands').insert(band);
  return getById(id);
};

const update = async (band_id, payload) => {
  await db('bands')
    .where('band_id', band_id)
    .update(payload);

  const updatedBand = await getById(band_id);
  return updatedBand;
};

const remove = async (band_id) => {
  const deletedBand = await db('bands')
    .where({ band_id })
    .del();

  return deletedBand;
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
}
