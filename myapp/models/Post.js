import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
    
    },
   slug: String,
   desc: String,
   imgUrl: String,
   tags: [],
   publish: {
    type: Boolean,
    default: false
   },
   user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {timestamps: true})

export default mongoose?.models?.Post || mongoose.model("Post", PostSchema)