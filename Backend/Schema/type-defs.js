const { gql } = require("apollo-server")

const typeDefs = gql`
    type User {
        id:ID!
        username:String!
        password:String!
        email:String
        token:String
    }
    input RegisterInput {
        Username:String!
        email:String!
        password:String!
    }
    input LoginInput {
        email:String!
        password:String!
    }

    type Query {
        users:[User]
    }

    type mutation {
        registerUser(registerInput:RegisterInput):User
        LoginUser(loginInput:LoginInput):User
    }

`;

module.exports = { typeDefs };