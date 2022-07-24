import db from "../models/index.js";
import Service from "../services/Service.js";

const TodoItem = db.todoItems;

class Controller {
    create = (req, res) => {
        const {body: {description, status, title}} = req;
        Service.save({title, description, status})
            .then(data => res.send(data))
            .catch(err => {
                res.status(err.statusCode || 500).send(err.message);
            });
    };

    update = (req, res) => {
        const {body, params} = req;
        const {id} = params;
        Service.update(id, body)
            .then(data => res.send(data))
            .catch(err => {
                res.status(err.statusCode || 500).send(err.message);
            });
    };

    changeStatus = (req, res) => {
        const {id, status} = req.params;
        Service.changeStatus(id, status)
            .then(() => res.status(200).send())
            .catch(err => {
                res.status(err.statusCode || 500).send(err.message);
            });

    }

    findAll = (req, res) => {
        Service.findAll()
            .then((data) => res.send(data))
            .catch(err => {
                res.status(err.statusCode || 500).send(err.message);
            });
    };

    findOne = (req, res) => {
        const id = req.params.id;
        Service.findOne(id)
            .then((data) => res.send(data))
            .catch(err => {
                res.status(err.statusCode || 500).send(err.message);
            });
    };

    delete = (req, res) => {
        const id = req.params.id;
        Service.delete(id)
            .then((data) => res.send(data))
            .catch(err => {
                res.status(err.statusCode || 500).send(err.message);
            });
    };
}

export default new Controller();