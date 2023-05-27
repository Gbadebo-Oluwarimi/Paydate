const jwt = require('jsonwebtoken')
const getUser = require('./Functions/getToken');
const User = require('./model/User');


async function context({req, res}) {
  if(req.body.operationName === 'test'){
    return {req, res}
  }
   if( req.body.operationName === 'logins' || req.body.operationName === 'createauser'){
    return {},{res,req}
   }
   if( req.body.operationName === 'invalidateuser'){
    return {res}
   }
   const accessToken = req.cookies['access-token']
   const refreshtoken = req.cookies['refresh-token']


   if(!accessToken && !refreshtoken){
    throw new Error('user is not authenticated')
   }
   if(!refreshtoken){
    throw new Error('User is not Authenticated')
   }
  

   //verifiying the access token 
    const user = await getUser(accessToken); 
    if(!user){
      // verifying the refresh token 
      const checkrefresh = await getUser(refreshtoken);
      if(checkrefresh){
        const theuser = await User.findById(checkrefresh.user_id)
          if (!theuser || theuser.count !== checkrefresh.count){
              throw new Error('token has been invalidated')
          }
          const newaccesstoken = jwt.sign({
            user_id:theuser._id,email:theuser.email
        }, "UNSAFE_STRING", { expiresIn: "5d" })

        const newrefreshtoken = jwt.sign({
            user_id:theuser._id, count:theuser.count
        }, "UNSAFE_STRING", { expiresIn: "7d" })
        

        //saving the refresh token and access token  in a cookie 
        res.cookie('refresh-token', newrefreshtoken, {expire: 60 * 60 * 24 * 7, secure:true})
        res.cookie('access-token', newaccesstoken, {expire: 60 * 15, secure:true})

        theuser.token = newaccesstoken
      }
      
      
    }
    return  user
}

module.exports = context