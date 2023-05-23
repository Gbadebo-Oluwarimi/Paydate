const Userclients = require('../../model/Userclients')
const Clientinvoice = require('../../model/Clientinvoice');
module.exports = {
    Mutation:{
        async createCustomer(parent, {createclient:{Clientemail,clientmobile,clientusername}},context){
            // console.log(context.user_id)
            const userid = context.user_id;
            if(userid){
                const newClient = new Userclients({
                    Clientemail,
                    Clientmobile:clientmobile.toLowerCase(),
                    user:context.user_id,
                    Clientusername:clientusername
                })
                await newClient.save();
                return true
            }
        return false
        },
    async deleteCustomer(parent, {deleteClient:{clientid}}){
        console.log(clientid);
        if(clientid){
            await Userclients.findByIdAndDelete(clientid)
            return true
        }
        console.log('Cannot delete a user with no id')
        return false

    },
    async createInvoice(parent, {CreateInvoice:{invoice_description, exp_date, start_date, Userclient}}, context){
       
        const client = Userclients.findById(Userclient)
        if(client){
            const invoice = new Clientinvoice({
                start_date,
                exp_date,
                UserClient:Userclient,
                user:context.user_id,
                invoice_description
            })
            await invoice.save();
            return true
        }
        return false 
      
    }
    },
    Query:{

    }
}