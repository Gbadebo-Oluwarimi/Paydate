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
            return {
                id:output._id,
                email:output.email,
                password:output.encrypted_password
            }
        },


// Login Mutation
        async LoginUser(_, {loginInput: {email, password}}, { res }){
            const user = await User.findOne({email})
            if(user && (await bcrypt.compare(password, user.encrypted_password))){
                const accesstoken = jwt.sign({
                    user_id:user._id,email
                }, "UNSAFE_STRING", { expiresIn: "5d" })

                const refreshtoken = jwt.sign({
                    user_id:user._id, count:user.count
                }, "UNSAFE_STRING", { expiresIn: "7d" })
                

                //saving the refresh token and access token  in a cookie 
                res.cookie('refresh-token', refreshtoken, {expire: 60 * 60 * 24 * 7, secure:true})
                res.cookie('access-token', accesstoken, {expire: 60 * 15, secure:true})
                // updating the token 
                user.token = accesstoken

                // context.req.session.token = newtoken; // Store token in session cookie
                // console.log(context.req.session.token);
                return {
                    id:user._id,
                    ...user._doc
                }
            }else{
                throw new Error("The password is not correct")
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
        },


        async invalidatejwt(parent, args, context){
        
            const theuser = await User.findById(context.user_id)
            
            if(theuser){
                 theuser.count += 1
                await theuser.save()
                return true
            }
            return false
           
        }



    },

    Query:{
        async users(parent, args, context) {
            console.log(context);
            const theuser = await User.findById(context.user_id)
            return theuser
        },
        async testing(){
            console.log('ran')
            return "It f****ng worked"
        }
    },
}