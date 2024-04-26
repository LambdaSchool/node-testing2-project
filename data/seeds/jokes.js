
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jokes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert([
        {joke: "What do you call a fake noodle?", punchline: 'impasta!'},
        {joke: "What did the fish say when he ran into a brick wall?", punchline: 'dam'},
        {joke: "Why was 6 afraid of 7?", punchline: 'because seven ate nine!'}
      ]);
    });
};
