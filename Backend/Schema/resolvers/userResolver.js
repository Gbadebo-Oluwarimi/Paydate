const User  = require('../../model/User');
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs");
const ForgotpasswordLinkGenerator = require('../../Functions/Forgotfunc');
module.exports = {
    Mutation:{
        async createUser(_, {registerInput: {email, Username, password}}){
            const existingUser = await User.findOne({email});
            if(existingUser) {
                throw new ApolloError(`A User with this email ${email} already exist`)
            }
            var encryptedpassword = await bcrypt.hash(password, 10)

            const newUser = new User({
                username:Username,
                email:email.toLowerCase(),
                encrypted_password:encryptedpassword
            })
            const token = jwt.sign({
                user_id:newUser._id,email
            }, "UNSAFE_STRING", { expiresIn: "2h" })

            newUser.token = token
            const output = await newUser.save();
            console.log(output)
            res.cookie('toke', "gibberish", {httpOnly:true})
            return {
                id:res._id,
                email:res.email
            }
        },


// Login Mutation
        async LoginUser(_, {loginInput: {email, password}}){
            const user = await User.findOne({email})
            if(user && (await bcrypt.compare(password, user.encrypted_password))){
                const token = jwt.sign({
                    user_id:user._id,email
                }, "UNSAFE_STRING", { expiresIn: "2h" })
                // updating the token 
                user.token = token
                context.req.session.token = token; // Store token in session cookie
                console.log(context);
                return {
                    id:user._id,
                    ...user._doc
                }
            }else{
                throw new ApolloError("The password is not correct")
            }
        },

        // Forgot Password Mutation 
        async ForgotUser(_, {forgotPassword:{email}}){
         // check if user email exists
            const user = await User.findOne({email})
            if (user){
                const link2 = ForgotpasswordLinkGenerator(user._id, user.password, user.email);
                console.log(link2)
            }else{
                throw new Error('This User Dosent exist')
            }
        }



    },

    Query:{
        async users(parent, args, context) {
            console.log("the sjfn", context);
            
            // const { token } = context.req.session;
            // console.log(token) // Retrieve token from session cookie
            // if (!token) {
            //   throw new Error('Authentication required');
            // }
            // try {
            // //   const payload = jwt.verify(token, 'UNSAFE_STRING');
            // //   const user = await User.find();
            // //   return user;
            // return await User.find();
            // } catch (err) {
            //   throw new Error('Authentication required');
            // }
            return await User.find()
        },
        logout(){

        }
    },
}

