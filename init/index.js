const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const DB_URL =
  "mongodb+srv://vanshchauhan1106:luxe-living@luxe-living0.5nvvko4.mongodb.net/?retryWrites=true&w=majority&appName=luxe-living0";

mongoose
  .connect(DB_URL)
  .then((res) => {
    console.log("DB Connection Successfull!");
  })
  .catch((err) => {
    console.log("DB Connection Failed!");
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
