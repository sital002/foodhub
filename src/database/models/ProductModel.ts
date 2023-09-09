import mongoose from "mongoose";

const ProductSchmea = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product Name is required"],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Price is reqiured"],
  },
  images: {
    type: Array,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Array,
  },
});


// mongoose.models = {};

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchmea);
export default Product;