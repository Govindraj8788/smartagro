import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: String,
  productId: String,
  title: String,
  price: String,
  image: String,
  quantity: Number,
});

export default mongoose.models.Cart || mongoose.model("Cart", cartSchema);