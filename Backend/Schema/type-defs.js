const { gql } =require('graphql-tag')
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
    input ForgotPassword{
        email:String!
    }
    input createClient{
        Clientemail:String!
        clientmobile:String!
        clientusername:String!
    }
    type Query {
        users:User
        logout:User
    }

    type Mutation {
        createUser(registerInput:RegisterInput):User
        LoginUser(loginInput:LoginInput):User
        ForgotUser(forgotPassword:ForgotPassword):User
        createCustomer(createclient:createClient):Boolean
        invalidatejwt:Boolean
    }

`;

module.exports = { typeDefs };