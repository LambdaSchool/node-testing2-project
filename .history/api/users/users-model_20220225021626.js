const db = require('../../data/db-config');

function find() {
	return db('users').select('user_id', 'name');
}

function findBy(filter) {
	return db('users').where(filter);
}

function findById(user_id) {
	return db('users')
		.where('user_id', user_id)
		.first();
}

async function add(name) {
	return db('users').insert(user).then(([user_id]) => {
        return findById(user_id)
    })
}

module.exports = {
	find,
	findBy,
	findById,
	add,
};
