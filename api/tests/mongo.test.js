import request from "supertest";

import app from "../server.js";
import {connectDb, disconnectDb} from "../models/db.js";


describe('api test', () => {

    beforeAll(async () => {
       await connectDb();
    });

    afterAll(async () => {
       await disconnectDb();
    });

    it('getting all items', async () => {
         const response = await request(app)
             .get('/api/items/');

        expect(response.status).toBe(200);
    });
});