const jwt = require('jsonwebtoken')
const getUser = async(token) => {
    try {
      if(token){
        const user = jwt.verify(token, "UNSAFE_STRING")
        return user
      }
      return null
    } catch (error) {
      return error
    }
  }

module.exports = getUser