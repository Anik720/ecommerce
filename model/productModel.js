const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  catogory: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  reviews: [reviewSchema],

  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports=Product