const jwt = require('jsonwebtoken');

const ForgotpasswordLinkGenerator  = (id, password, email) => {
    const secret = "UNSAFE_STRING" + password;
    const payload = {
        email,
        id,
    }
    const token = jwt.sign(payload, secret, {expiresIn: '20m'})
    const link = `http://localhost:4000/reset-password/${id}/${token}`
    return link;
}


module.exports = ForgotpasswordLinkGenerator;
