const request = require('supertest');
const server = require('./server');

describe('GET to /api/bands', () => {
  test('API responds with the correct friends list', async () => {
    const response = await request(server).get('/api/bands');
    expect(response.body).toHaveLength(5);
  })
})