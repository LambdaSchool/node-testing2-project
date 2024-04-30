
const db = require('../../data/db-config')

const getAll = () => {
  return db('friends');
}

const getById = async (friend_id) => {
  const friend = await db('friends')
    .where({ friend_id })
    .first()
  return friend
}

const remove = async (friend_id) => {
  const deletedFriend = await db('friends')
    .where({ friend_id })
    .del()
  return deletedFriend
}

const add = async (friend) => {
  const [id] = await db('friends')
    .insert(friend)
  return getById(id)
}


module.exports = {
  getAll,
  getById,
  remove,
  add
}
