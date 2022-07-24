import mongoose from 'mongoose'
import URL from '../config/DbConfig.js'
import Schema from "./Model.js";

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = URL;
db.todoItems = Schema;

export default db;