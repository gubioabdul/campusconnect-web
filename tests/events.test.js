const request = require('supertest');
const app = require('../server');

describe('CampusConnect API', () => {
  test('GET /api/events returns a list of events', async () => {
    const response = await request(app).get('/api/events');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
  test('POST /api/events/:id/attend registers an attendee', async () => {
    const response = await request(app).post('/api/events/1/attend').send({ name: 'Test Student' });
    expect(response.statusCode).toBe(200);
    expect(response.body.attendees).toContain('Test Student');
  });
  test('POST /api/events/:id/attend rejects an empty name', async () => {
    const response = await request(app).post('/api/events/1/attend').send({ name: ' ' });
    expect(response.statusCode).toBe(400);
  });
});
