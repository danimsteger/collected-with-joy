const typeDefs = `
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        itemsSaved: [Item]
        itemsPurchased: [Item]
            }


    type Item {
        _id: ID
        name: String
        price: Float
        photos: [String]
        quantity: Int
        isAvailable: Boolean
        description: String
        categroies: [String]
        }

    type Query {
        users: [User]
        user(id: ID!): User
        items: [Item]
        item(id: ID!): Item
    }

    type Mutation {
        addUser(
            firstName: String!
            lastName: String!
            email: String!
            password: String!   
): User  
    }

`;
module.exports = typeDefs;
