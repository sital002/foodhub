import { Document, Model, model, models, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  role: string;
  profile: {
    url: string;
  };
  mobile: number;
  cart: Array<Schema.Types.ObjectId>;
  orders: Array<Schema.Types.ObjectId>;
  createdAt: Date;
  getCartItems: () => Promise<Array<Schema.Types.ObjectId>>;
}

const UserSchema: Schema = new Schema({
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
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.methods.getCartItems = async function () {
  return this.populate("cart");
};

export const User: Model<IUser> = models.User || model<IUser>("User", UserSchema);