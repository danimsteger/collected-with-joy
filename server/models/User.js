const { Schema, model } = require("mongoose");

const Item = require("./Item");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  itemsSaved: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  itemsPurchased: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;
