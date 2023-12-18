import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        },
      product: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Product",
        default: []
    }
 
}, {timestamps: true})

export default mongoose?.models?.Category || mongoose.model("Category", CategorySchema)