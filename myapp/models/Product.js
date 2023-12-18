    import mongoose from "mongoose";

    const ProductSchema = new mongoose.Schema({
        name: {
            type: String,
            },
        category: {
            type: String,
        },
        color: {
            type: String
        },
        images: {
            imgUrl: String
        },
        size: {
            type: String
        },
        featured: {
            type: Boolean,
            default: false,
        },
        inSock: {
            type: Boolean,
            default: true,
        }
    
    }, {timestamps: true})

    export default mongoose?.models?.Product || mongoose.model("Product", ProductSchema)