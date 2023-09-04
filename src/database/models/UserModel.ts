import mongoose, { models, model } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  role: {
    type: String,
    default: "user",
  },
  profile: {
    url: String,
  },
  mobile: {
    type: Number,
  },
  cart: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  }],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.methods.getCartItems = function () {
  return this.cart;
};
export const User = models.user || model("user", UserSchema);
