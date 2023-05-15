// npm install @apollo/server express graphql cors body-parser
const { ApolloServer } =require('@apollo/server');
const  { connectdb }  = require('./config/db');
const { expressMiddleware } = require('@apollo/server/express4')
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const colors = require('colors')
const dotenv = require('dotenv').config()
const http = require('http')
const cors = require('cors')
const { json } = require('body-parser')
const { typeDefs } = require('./Schema/type-defs');
const resolvers = require('./Schema/resolvers')
const { gettoken } = require('./Functions/getToken')
const app = express();
const httpServer = http.createServer(app);
const context = require('./Context')
 

app.use(cookieParser());
app.use(session({
  secret: "UNSAFE_STRING",
  resave: false,
  saveUninitialized: true
}));




const StartServer = async () => {
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use(
  '/graphql',
  cors(),
  json(),
  expressMiddleware(server, {
    context:context
  }),
);

await connectdb();
await new Promise((resolve) => httpServer.listen({ port: 4000 },resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}


StartServer();

