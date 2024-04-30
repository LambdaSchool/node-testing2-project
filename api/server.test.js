const db = require('../data/db-config')
const request = require('supertest')
const server = require('./server')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})

describe('[GET] /api/friends', () => {
  test('responds with friends list', async () => {
    const res = await request(server).get('/api/friends')
    expect(res.body).toHaveLength(3)
  })
  test('responds with OK 200', async () => {
    const res = await request(server).get('/api/friends')
    expect(res.status).toBe(200)
  })
})

describe('[GET] /api/friends/:friend_id', () => {
  test('responds with given friend', async () => {
    const friend = { friend_name: "Isaac" }
    const res = await request(server).get('/api/friends/1')
    expect(res.body).toMatchObject(friend)
  })
})

describe('[POST] /api/friends', () => {
  test('adds friend to the database', async () => {
    const newFriend = { friend_id: 4, friend_name: "Brooke" }
    await request(server).post('/api/friends').send(newFriend)
    expect(await db('friends')).toHaveLength(4)
  })
})

describe('[DELETE] /api/friends/:friend_id', () => {
  test('removes friend from the database', async () => {
    await request(server).delete('/api/friends/1')
    expect(await db('friends')).toHaveLength(2)
  })
})