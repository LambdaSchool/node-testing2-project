exports.seed = function (knex) {
	return knex('users').insert([
		{username: 'username1',	password: 'password1'},
		{username: 'username2',	password: 'password2',},
		{username: 'username3',	password: 'password3',},
		{username: 'username4',	password: 'password4',},
		{username: 'username5',	password: 'password5',},
		{username: 'username6',	password: 'password6',},

]);
};
