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
  images: [
      {
        public_id: String,
        url: String,
      }
    ],
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Array,
  },
});



const Product = mongoose.models.product || mongoose.model("product", ProductSchmea);
export default Product;