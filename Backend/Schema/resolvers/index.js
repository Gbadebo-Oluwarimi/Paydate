const userResolve = require('./userResolver');

module.exports = {
    Query:{
        ...userResolve.Query
    },
    Mutation:{
        ...userResolve.Mutation
    }
}