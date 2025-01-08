const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
    max: 1000,
  },
  photos: [
    {
      type: String,
      trim: true,
    },
  ],
  quantity: {
    type: Number,
    required: true,
    min: 0,
    max: 20,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  categories: [
    {
      type: String,
      trim: true,
    },
  ],
});

const Item = model("Item", itemSchema);

module.exports = Item;
