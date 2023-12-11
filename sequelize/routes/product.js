const productControl = require("../controller/product");

const router = require("express").Router();

router.post("/create", productControl.addProduct);

router.get("/products", productControl.addProduct);
router.get("/product", productControl.singleProduct);
router.patch("/product/update/:id", productControl.updateProduct);
router.delete("/product/delete/:id", productControl.deleteProduct);

module.exports = router;
