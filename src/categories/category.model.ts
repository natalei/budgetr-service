import { model, Schema } from "mongoose"

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

export default model("Category", CategorySchema);
