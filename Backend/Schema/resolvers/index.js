const userResolve = require('./userResolver');
const createResolve = require('./createResolver');
module.exports = {
    Query:{
        ...userResolve.Query,
        ...createResolve.Query
    },
    Mutation:{
        ...userResolve.Mutation,
        ...createResolve.Mutation
    }
}