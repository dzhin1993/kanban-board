const db = require("../models");
const TodoItem = db.todoItems;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({message: "Content can not be empty!"});
  }
  
  const todoItem = new TodoItem({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });
  
  todoItem.save(todoItem)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the TodoItem."
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  
  const id = req.params.id;
  
  TodoItem.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
      if (data) {
        res.send({message: "TodoItem was updated successfully."});
      } else {
        res.status(404).send({
          message: `Cannot update TodoItem with id=${id}.`
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: "Error updating TodoItem with id=" + id
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  const condition = title ? {title: {$regex: new RegExp(title), $options: "i"}} : {};
  
  TodoItem.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving todoItems."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  
  TodoItem.findById(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({message: "Not found TodoItems with id " + id});
      }
    })
    .catch(() => {
      res
        .status(500)
        .send({message: "Error retrieving TodoItem with id=" + id});
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  
  TodoItem.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete TodoItem with id=${id}.`
        });
      } else {
        res.send({
          message: "TodoItem was deleted successfully!"
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: "Could not delete TodoItem with id=" + id
      });
    });
};