const express = require("express");
const products = require("./data/products");
const colors=require("colors")
require("dotenv").config();


const connetDB =require("./config/db")

connetDB()
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.get("/api/v1/product", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: products,
  });
});
app.get("/api/v1/product/:id", (req, res) => {
  console.log(products.products);
  const product = products.products.find(
    (product) => product._id === req.params.id
  );
  res.status(200).json({
    message: "Success",
    data: product,
  });
});

app.listen(PORT, () => {
  console.log("Server is running", PORT);
});
