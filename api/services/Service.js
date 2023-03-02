import db from "../models/index.js";
import {groupBy} from "../utils/ReducerUtils.js";
import HttpError from "../errors/HttpError.js"

const TodoItem = db.todoItems;

class Service {
    async save(todoItem) {
        if (!todoItem.title) {
            throw new HttpError(`Title can not be empty!`, 400)
        }
        return TodoItem.create(todoItem);
    }

    async update(id, todoItem) {
        if (!todoItem) {
            throw new HttpError(`Data to update can not be empty`, 400);
        }
        return TodoItem.findByIdAndUpdate(id, todoItem, {useFindAndModify: false, new: true})
            .then(data => {
                if (data) {
                    return data;
                } else {
                    throw new HttpError(`Not found with id=${id}.`, 404);
                }
            });
    }

    async changeStatus(id, status) {
        return TodoItem.findByIdAndUpdate(id, {status}, {new: true})
            .then(data => {
                if (!data) {
                    throw new HttpError(`Not found with id=${id}.`, 404);
                }
                return data;
            });
    }

    async findAll() {
        return TodoItem.find()
            .then(data => groupBy(data, 'status'));
    }

    async findOne(id) {
        return TodoItem.findById(id)
            .then(data => {
                if (data) {
                    return data
                } else {
                    throw new HttpError(`Not found with id=${id}.`, 404);
                }
            });
    }

    async delete(id) {
        return TodoItem.findByIdAndRemove(id)
            .then(data => {
                if (data) {
                    return data
                } else {
                    throw new HttpError(`Not found with id=${id}.`, 404);
                }
            });
    }
}

export default new Service();