const  { ApolloServer } = require('apollo-server');
const colors = require('colors');
require('dotenv').config();
const connectDB = require('./config/db')
const { typeDefs } = require('./Schema/type-defs');
const  resolvers  = require('./Schema/resolvers');
const server = new ApolloServer({typeDefs, resolvers});

connectDB();

server.listen(4000, () => {
    console.log(`Your api is running at port 4000`)
})