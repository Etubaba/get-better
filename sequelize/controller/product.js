const { response } = require("express");
const db = require("../models");

const Product = db.products;

const addProduct = async (req, res) => {
  const body = {
    title: req.body.title,
    price: req.body.description,
    sold: false,
  };
  const newProduct = await Product.create(body);
  res.status(200).json({ products: newProduct });
};

const allProducts = async (req, res) => {
  const products = await Product.findAll({
    //just like select in prisma attributes contains what you want
    // attributes: ["id", "title", "price"],
  });
  res.json({ data: products });
};
const singleProduct = async (req, res) => {
  const id = req.params.id;
  const products = await Product.findOne({
    where: { id },
  });
  res.json({ data: products });
};

const updateProduct = async (req, res) => {
  const id = req.params.id;

  const products = await Product.update(req.body, {
    where: { id },
  });
  res.json({ data: products });
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;

  await Product.destroy({
    where: { id },
  });
  res.json({ status: true, message: "Product deleted" });
};

const methods = {
  addProduct,
  allProducts,
  deleteProduct,
  singleProduct,
  updateProduct,
};

module.exports = methods;
