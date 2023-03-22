const userResolver = require('./userResolve');

module.exports = {
    Query:{
        ...userResolver.Query
    },
    Mutation:{
        ...userResolver.Mutation
    }
}