const express = require("express");
const products = require("./data/products");
const colors = require("colors");
const productRoutes = require("./routes/productRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");
require("dotenv").config();

const connetDB = require("./config/db");

connetDB();
const app = express();
const PORT = process.env.PORT || 6000;
app.use(express.json());
app.use("/api/v1/product", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running", PORT);
});
