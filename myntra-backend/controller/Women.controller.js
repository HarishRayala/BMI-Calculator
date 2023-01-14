const { WomenModel } = require("../Model/Women.model");

const getWomenData = async (req, res) => {
  const { brand, color, categories, price } = req.query;
  if (brand) {
    const womenData = await WomenModel.find({ brand: brand });
    res.send(womenData);
  } else if (color) {
    const womenData = await WomenModel.find({ color: color });
    res.send(womenData);
  } else if (categories) {
    const womenData = await WomenModel.find({ categories: categories });
    res.send(womenData);
  } else if (price) {
    const womenData = await WomenModel.find({ price: price });
    res.send(womenData);
  } else {
    const womenData = await WomenModel.find();
    res.send(womenData);
  }
};
const getBrand = async (req, res) => {
  const brandData = await WomenModel.find({ brand: req.params.brand });
  res.send(brandData);
};

const filterdata = async (req, res) => {
  const { brand, color, categories, price } = req.query;
  const filterData = await WomenModel.find({
    $or: [
      { brand: brand },
      { color: color },
      { categories: categories },
      { price: price },
    ],
  });
  res.send(filterData);
};

const postWomensData = async (req, res) => {
  const {
    Idno,
    categories,
    title,
    price,
    gender,
    sizes,
    description,
    brand,
    color,
    discount,
    off_price,
    images,
    rating,
  } = req.body;
  const data = new WomenModel(req.body);
  if (
    Idno &&
    categories &&
    title &&
    price &&
    gender &&
    sizes &&
    description &&
    brand &&
    color &&
    discount &&
    off_price &&
    images &&
    rating
  ) {
    data.save();
    res.send("Posted Successfully");
  } else {
    console.log(req.body);
    res.send("Please send all the Fields");
  }
};

const WomensDataController = {
  getWomenData,
  filterdata,
  getBrand,
  postWomensData,
};

module.exports = { WomensDataController };
