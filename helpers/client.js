import request from 'supertest';

export const client = request(process.env.BASE_URL)