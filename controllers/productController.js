import productModel from "../models/productModel.js";

// Controller for creating the products;
export const createProductController = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    // Checking if product already exists
    const existing = await productModel.findOne({ name });
    if (existing) {
      return res.status(200).send({
        success: true,
        message: "Product already exists",
      });
    } else {
      const newProduct = await new productModel({
        name,
        quantity,
      }).save();
      return res.status(201).send({
        success: true,
        message: "Product created successfully",
        newProduct,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in creating the product",
      error,
    });
  }
};

// Controller for getting all the products;

export const getProductsController = async (req, res) => {
  try {
    const products = await productModel.find({});
    return res.status(200).send({
      success: true,
      message: "Getting all the products",
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in getting the products",
      error,
    });
  }
};

// Controller for deleting all the products;

export const deleteProductController = async (req, res) => {
  try {
    const productToBeDeleted = await productModel.findByIdAndDelete(
      req.params.id
    );
    res.status(201).send({
      success: true,
      message: "Product Deleted Successfully",
      productToBeDeleted,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in deleting the product",
      error,
    });
  }
};

// Controller for updating all the products;

export const updateProductController = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = await productModel.findById(req.params.id);
    if (product) {
      const productToBeUpdated = await productModel.findByIdAndUpdate(
        req.params.id,
        { name: name, quantity: quantity },
        { new: true }
      );
      return res.status(200).send({
        success: true,
        message: "Item Updated Successfully",
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "Item does not exist",
      });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in updating the product",
      error,
    });
  }
};
