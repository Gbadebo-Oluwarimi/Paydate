const jwt = require('jsonwebtoken')
const getUser = async(token,req) => {
    try {
      if(token){
        const user = jwt.verify(token, "UNSAFE_STRING")
        return user
      }
      return null
    } catch (error) {
      console.log('An Error Occured', error)
      return error
    }
  }

module.exports = getUser