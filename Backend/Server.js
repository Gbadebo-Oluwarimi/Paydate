// npm install @apollo/server express graphql cors body-parser
const { ApolloServer } =require('@apollo/server');
const  { connectdb }  = require('./config/db');
const { expressMiddleware } = require('@apollo/server/express4')
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const express = require('express');
const cookieParser = require('cookie-parser');
// const session = require('express-session');
const colors = require('colors')
const cron = require('node-cron')
const dotenv = require('dotenv').config()
const http = require('http')
const cors = require('cors')
const { json } = require('body-parser')
const { typeDefs } = require('./Schema/type-defs');
const resolvers = require('./Schema/resolvers')
const app = express();
const httpServer = http.createServer(app);
const context = require('./Context')

app.use(cookieParser());
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

cron.schedule('* * * * *', () => {
// const timestamp = Date.now();
// const date = new Date(timestamp);
// const dateString = date.toLocaleString(); // Convert date to a string using the browser's local timezone

// console.log(dateString); // Output: "5/22/2023, 12:34:56 PM" (example format)
  // console.log('running a task every minute');
});