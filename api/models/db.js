import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

import URL from '../config/dbConfig.js'
import Schema from "./model.js";

mongoose.Promise = global.Promise;

const db = {};
db.url = URL;
db.todoItems = Schema;

let mongoMemoryServer = null;

export const connectDb = async () => {
    try {
        if (process.env.NODE_ENV === 'test') {
            mongoMemoryServer = await MongoMemoryServer.create();
            db.url = mongoMemoryServer.getUri();
        }

        await mongoose.connect(db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export const disconnectDb = async () => {
    try {
        await mongoose.connection.close();
        if (mongoMemoryServer) {
            await mongoMemoryServer.stop();
        }
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export default db;