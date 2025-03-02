const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/", async (req, res) => {
  const { page = 1, limit = 2, category, minPrice, maxPrice } = req.query;
  console.log(req.query);
  let filter = {};
  if (category) {
    filter.category = category;
  }
  if (minPrice || maxPrice)
    filter.price = {
      ...(minPrice && { $gte:Number(minPrice)  }),
      ...Product(maxPrice && { $lte: Number (maxPrice) }),
    };
  const data = await Product.find(filter).limit(limit*1).skip((page-1)*limit);
  res.send(data);
});

router.post("/", async (req,res)=>{
    const addproduct = await new Product(req.body);
    await addproduct.save();
    res.send(addproduct);
})

module.exports = router;
