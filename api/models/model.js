import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
        title: String,
        description: String,
        status: {
            type: String,
            enum: ['UPCOMING', 'IN_PROGRESS', 'ON_HOLD', 'COMPLETED'],
            default: 'UPCOMING'
        }
    },
    {timestamps: true});

Schema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});

export default mongoose.model("TodoItem", Schema);

