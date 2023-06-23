import request from "supertest";

import app from "../server.js";
import {connectDb, disconnectDb} from "../models/db.js";


describe('api test', () => {

    let createdId = null;

    beforeAll(async () => {
        await connectDb();
    });

    afterAll(async () => {
        await disconnectDb();
    });

    beforeEach(async () => {
       createdId = await request(app)
            .post('/api/items/')
            .send({
                title: 'created',
                description: 'created',
                status: 'COMPLETED'
            })
            .then(({body}) => body.id);
    });

    afterEach(async () => {
        await request(app)
            .delete(`/api/items/${createdId}`);
    });

    it('save item', async () => {
        const completedItem = {
            title: 'created',
            description: 'created',
            status: 'COMPLETED'
        };

        const {body} = await request(app)
            .post('/api/items/')
            .send(completedItem)
            .expect(200);

        expect(body).toHaveProperty('id');
        expect(body).toHaveProperty('title', 'created');
        expect(body).toHaveProperty('description', 'created');
        expect(body).toHaveProperty('status', 'COMPLETED');

        await request(app)
            .delete(`/api/items/${body.id}`);

    });

    it('update item', async () => {
        const updatedItem = {
            title: 'updated',
            description: 'updated',
            status: 'COMPLETED'
        };

        const {body} = await request(app)
            .put(`/api/items/${createdId}`)
            .send(updatedItem)
            .expect(200);

        expect(body).toHaveProperty('id');
        expect(body).toHaveProperty('title', 'updated');
        expect(body).toHaveProperty('description', 'updated');
        expect(body).toHaveProperty('status', 'COMPLETED');
    });

    it('change status', async () => {

        const status = 'UPCOMING';

        const {body} = await request(app)
            .put(`/api/items/${createdId}/status/${status}`)
            .expect(200);

        expect(body).toHaveProperty('status', status);
    });

    it('get item', async () => {
        const {body} = await request(app)
            .get(`/api/items/${createdId}`)
            .expect(200);

        expect(body).toHaveProperty('id');
    });

    it('delete item', async () => {
        await request(app)
            .delete(`/api/items/${createdId}`);

        await request(app)
            .get(`/api/items/${createdId}`)
            .expect(404);

    });

    it('getting all items', async () => {
        await request(app)
            .post('/api/items/')
            .send({
                title: 'created',
                description: 'created',
                status: 'UPCOMING'
            });

        await request(app)
            .get('/api/items/')
            .expect(200)
            .then(({body}) => {
                expect(body).toHaveProperty('COMPLETED');
                expect(body).toHaveProperty('UPCOMING');
            });
    });
});