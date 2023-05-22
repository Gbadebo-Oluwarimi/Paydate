const userResolve = require('./userResolver');
const clientResolve = require('./clientResolver');
module.exports = {
    Query:{
        ...userResolve.Query,
        ...clientResolve.Query
    },
    Mutation:{
        ...userResolve.Mutation,
        ...clientResolve.Mutation
    }
}