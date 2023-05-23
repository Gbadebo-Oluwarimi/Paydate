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
    input deleteClient{
        clientid:ID!
    }
    input createClient{
        Clientemail:String!
        clientmobile:String!
        clientusername:String!
    }
    input CreateInvoice{
        invoice_description:String!
        exp_date:String!
        start_date:String!
        Userclient:ID!
    }
    type Query {
        users:User
        logout:User
    }

    type Mutation {
        createUser(registerInput:RegisterInput):User
        LoginUser(loginInput:LoginInput):User
        ForgotUser(forgotPassword:ForgotPassword):User
        invalidatejwt:Boolean



        createCustomer(createclient:createClient):Boolean
        deleteCustomer(deleteClient:deleteClient):Boolean
        createInvoice(CreateInvoice:CreateInvoice):Boolean

    }

`;

module.exports = { typeDefs };