import Product from '../models/products.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send({ products });
  } catch (error) {
    res.status(500).send({ status: error.name, message: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const data = req.body;
    const newProduct = new Product({ ...data });
    await newProduct.save();
    res.status(201).send({ newProduct });
  } catch (error) {
    res.status(500).send({ status: error.name, message: error.message });
  }
};
