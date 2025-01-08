const { Item, User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    items: async () => {
      return Item.find();
    },
    item: async (_, { itemId }) => {
      return Item.findOne({ _id: itemId });
    },
  },

  Mutation: {
    addUser: async (_, { firstName, lastName, email, password }) => {
      try {
        const newUser = await User.create({
          firstName,
          lastName,
          email,
          password,
        });
        return { user: newUser };
      } catch (err) {
        console.error("Error creating user:", err);
      }
    },
  },
};

module.exports = resolvers;
