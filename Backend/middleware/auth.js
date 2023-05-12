const  { AuthenticationError } = require('@apollo/server');

const jwt = require('jsonwebtoken');

module.exports = (context) => {
    const authHeader = context.req.headers.authorization;
    if(authHeader){
        const token = authHeader.split('Bearer')[1]
        if(token){
            console.log(token, 'dkddj')
            try{
                const user = jwt.verify(token, 'UNSAFE_STRING');
                return user
            } catch(error){
                throw new AuthenticationError('Invalid or Expired Token')
            }
        }
        throw new Error('Authentication toke must be a bearer token');
    }
    throw new Error('Authorization Header must be provided');
}