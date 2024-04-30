/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('friends').truncate()
  await knex('friends').insert([
    {friend_name: 'Isaac'},
    {friend_name: 'Bransen'},
    {friend_name: 'Derek'}
  ]);
};
