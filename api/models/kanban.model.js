module.exports = mongoose => {
  let schema = mongoose.Schema({
      title: String,
      description: String,
      status: {
          type: String,
          enum : ['CREATED','IN_PROGRESS', 'ON_HOLD', 'COMPLETED'],
          default: 'CREATED'
      }
    },
    {timestamps: true});
  schema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
  });
  return mongoose.model("TodoItem", schema);
};