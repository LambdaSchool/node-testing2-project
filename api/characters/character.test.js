const request = require('supertest')
const db = require('../../data/dbConfig')
const server = require('../server')
const Characters = require('./character-model')

const character1 = { name: 'gojo' }
const character2 = { name: 'luffy' }
const character3 = { name: 'shikamaru' }


beforeEach(async () => {
   await db('characters').truncate()
})
beforeAll(async () => {
   await db.migrate.rollback()
   await db.migrate.latest()
})
afterAll(async () => {
   await db.destroy()
})

it("correct env variable", () => {
expect(process.env.DB_ENV).toBe('testing')
})

describe('checking the character model functions', () => {
   describe('creates a character', () => {
      it('adds a character to db', async () => {
         let character
         await Characters.add(character1)
         character = await db('characters')
         expect(character).toHaveLength(1)
      })
      it('adds the correct characters', async () => {
         let character
         await Characters.add(character2)
         character = await db('characters').first()
         expect(character).toMatchObject({ name: "sukuna" })
      })
   })



   describe('deletes a character', () => {
      it('deletes character from the db', async () => {
         const [character_id] = await db('characters').insert(character1)
         await db('characters').insert(character2)
         await db('characters').insert(character3)
         let character = await db('characters')
         expect(character).toHaveLength(3)
         await request(server).delete("/api/characters/" + character_id)
         let newChar = await db('characters')
         expect(newChar).toHaveLength(2)
      })
      it('can show deleted character', async () => {
         await db('characters').insert(character2)
         let deletedChar = await request(server).delete("/api/charaters/1")
         expect(deletedChar.body).toMatchObject({ name: "sukuna" })
      })
   })
})

describe('testing router functions', () => {
   describe('post adds to db', () => {
      it('adds to the db', async () => {
         const newChar = await request(server).post('/api/characters').send({name: "Ichigo"})
         expect(newChar.status).toBe(201)
      })
   })
})