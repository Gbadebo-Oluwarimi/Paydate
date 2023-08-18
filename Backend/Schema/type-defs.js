const { gql } =require('graphql-tag')
const typeDefs = gql`
    type User {
        id:ID!
        username:String!
        password:String!
        email:String
        token:String
    }
    type User_Clients {
        id:ID!
        Clientusername:String!
        Clientemail:String!
        Clientmobile:String!
    }
    type Clientinvoice{
        invoice_description:String!
        exp_date:String!
        start_date:String!
        status:String!
        Clientname:String
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
    input deleteinvoice{
        invoiceId:ID!
    }
    input updateinvoice{
        start_date:String!
        exp_date:String!
        description:String!
        invoiceId:ID!
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
        isAuthenticated:Boolean
        userclients:[User_Clients!]!
        getAllclientinvoice:[Clientinvoice!]!
        getCompletedclientinvoice:[Clientinvoice!]!
    }

    type Mutation {
        createUser(registerInput:RegisterInput):User
        LoginUser(loginInput:LoginInput):User
        ForgotUser(forgotPassword:ForgotPassword):User
        invalidatejwt:Boolean
        deleteInvoice(deleteinvoice:deleteinvoice):Boolean
        Updateinvoice(updateinvoice:updateinvoice):Boolean
        Updateinvoicestatus(invoiceId:ID!, status:String!):Boolean

        createCustomer(createclient:createClient):Boolean
        deleteCustomer(deleteClient:deleteClient):Boolean
        createInvoice(CreateInvoice:CreateInvoice):Boolean

    }

`;

module.exports = { typeDefs };