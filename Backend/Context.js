const jwt = require('jsonwebtoken')
const getUser = require('./Functions/getToken');


async function context({req, res}) {
   if( req.body.operationName === 'logins' || req.body.operationName === 'createauser'){
    return {}
   }
   const token = req.headers.authorization || ''
    const user = await getUser(token); 
    if(!user){
      throw new Error('User is not Authenticated');
    }
    return  user
}

module.exports = context