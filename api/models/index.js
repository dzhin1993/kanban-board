import mongoose from 'mongoose'
import URL from '../config/dbConfig.js'
import Schema from "./model.js";

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = URL;
db.todoItems = Schema;

export default db;