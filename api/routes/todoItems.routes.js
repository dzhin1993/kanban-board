module.exports = app => {
  const tutorials = require("../controllers/todoItems.controller");
  
  let router = require("express").Router();
  
  router.post("/", tutorials.create);
  
  router.put("/:id", tutorials.update);

  router.put("/:id/status/:status", tutorials.updateStatus);
  
  router.delete("/:id", tutorials.delete);
  
  router.get("/", tutorials.findAll);
  
  router.get("/:id", tutorials.findOne);
  
  app.use("/api/items", router);
};
