const { ApolloError } = require('apollo-server');
const User  = require('../../model/User')

module.exports = {
    Mutation:{
        async createUser(_, {registerInput: {email, username, password}}){
            const existingUser = await User.findOne({email});
            if(oldUser) {
                throw new ApolloError(`A User with this email ${email} already exist`)
            }
            var encryptedpassword = await bcrypt.hash(password, 10)

            const newUser = new User({
                username,
                email:email.toLowerCase(),
                encrypted_password:encryptedpassword
            })
            const token = jwt.sign({
                user_id:newUser._id,email
            }, "UNSAFE_STRING", { expiresIn: "2h" })

            newUser.token = token
            const res = await newUser.save();
            return {
                id:res.id
            }
        },


// Login Mutation
        async LoginUser(_, {loginInput: {email, password}}){
            const user = await User.findOne({email})
            if(user && (await bcrypt.compare(password, user.encrypted_password))){
                const token = jwt.sign({
                    user_id:newUser._id,email
                }, "UNSAFE_STRING", { expiresIn: "2h" })
                // updating the token 
                user.token = token
            }else{
                throw new ApolloError("Please Kindly register")
            }
        }

    },
    Query:{
        users(){
            return User.find();
        }
    },
}

