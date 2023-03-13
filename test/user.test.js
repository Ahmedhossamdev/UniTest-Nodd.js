const request = require('supertest');
const app = require('./../config/app');

describe('HTTP methods', () => {
    test('should return "Welcome from get" on GET /', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
    });

    test('should return "Welcome from post" on POST /', async () => {
        const res = await request(app).post('/');
        expect(res.statusCode).toEqual(200);
    });

    test('should return "Welcome from put" on PUT /', async () => {
        const res = await request(app).put('/');
        expect(res.statusCode).toEqual(200);
    });

    test('should return "Welcome from delete" on DELETE /', async () => {
        const res = await request(app).delete('/');
        expect(res.statusCode).toEqual(200);
    });
});
