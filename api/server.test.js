const request = require('supertest');
const server = require('./server');

describe('GET to /api/bands', () => {
  test('API responds with the correct friends list', async () => {
    const response = await request(server).get('/api/bands');
    expect(response.body).toHaveLength(5);
  });
});

describe('GET to /api/bands/2', () => {
  test('API responds with the correct friend for an ID of 2', async () => {
    const band = {band_id: 2, band_name: 'TesseracT', genre: 'Progressive Metal'};
    const response = await request(server).get('/api/bands/2');
    expect(response.body).toMatchObject(band);
  });
});

describe('PUT to /api/bands/1', () => {
  test('API successfully updates Band with the ID of 1', async () => {
    const band = { band_name: 'Opeth', genre: 'Progressive and Death Metal' };
    const response = await request(server).put('/api/bands/1').send(band);
    expect(response.status).toBe(200);
  });
});

describe('POST to /api/bands', () => {
  test('API successfully creates a new band', async () => {
    const band = { band_name: 'Anderson Paak', genre: 'Multiple' };
    const response = await request(server).post('/api/bands').send(band);
    expect(response.status).toBe(201);
  });
});
