const express = require("express");
const Product = require("../model/productModel");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const product = await Product.find({});
    console.log(product);
    if (product) {
      res.status(200).json({
        message: "Success",
        data: product,
      });
    } else {
      res.status(404).json({
        message: "No data",
      });
    }
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.status(200).json({
        message: "Success",
        data: product,
      });
    } else {
      res.status(404).json({
        message: "No data",
      });
    }
  })
);

module.exports = router;
