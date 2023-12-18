import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
      },
      name: {
        type: String,
        required: [true, 'Name is required!'],

      },
      wishList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }]
}, {timestamps: true})

export default mongoose?.models?.User || mongoose.model("User", UserSchema)