const Friend = require('../friends/friends-model')
const db = require('../../data/db-config')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})

describe('getAll', () => {
  test('returns all friends in the database', async () => {
    const friends = await Friend.getAll()
    expect(friends).toHaveLength(3)
  })
})