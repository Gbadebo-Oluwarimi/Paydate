const jwt = require('jsonwebtoken')
const getUser = require('./Functions/getToken');


async function context({req, res}) {
   if( req.body.operationName === 'logins' || req.body.operationName === 'createauser'){
    return {},{res,req}
   }
   if( req.body.operationName === 'invalidateuser'){
    return {res}
   }
   const accessToken = req.cookies['access-token']
   const refreshtoken = req.cookies['refresh-token']

  //  if(!accessToken && !refreshtoken){
  //   throw new Error('user is not authenticated')
  //  }
  //  if(!refreshtoken){
  //   throw new Error('User is not Authenticated')
  //  }
  //  if(refreshtoken  && !accessToken){
  //   try {
  //     const data = jwt.verify(refreshtoken, "UNSAFE_STRING")
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  //  }
   //only happens if the access token is valid
    const user = await getUser(accessToken); 
    if(!user){
      throw new Error('User is not Authenticated');
    }
    return  user
}

module.exports = context