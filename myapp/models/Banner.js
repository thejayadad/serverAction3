import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
    title: {
        type: String,
        },
      desc:{
        type: String,
      },
      imgUrl: {
        type: String,
      },
      active:{
        type: Boolean,
        default: false,
    }
 
}, {timestamps: true})

export default mongoose?.models?.Banner || mongoose.model("Banner", BannerSchema)