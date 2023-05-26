const Userclients = require('../../model/Userclients')
const Clientinvoice = require('../../model/Clientinvoice');
const { compareSync } = require('bcryptjs');
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
      
    },
    async deleteInvoice(parent, {deleteinvoice:{invoiceId}}, context){
        const invoice = await Clientinvoice.findByIdAndDelete(invoiceId)
        if(!invoice){
            console.log('no invoice was found');
            return false
        }
        return true
        
    },
    async Updateinvoice(parent, {updateinvoice:{start_date, exp_date, description, invoiceId}}, context){
        const invoice = await Clientinvoice.findByIdAndUpdate(invoiceId, {
            start_date,
            exp_date,
            invoice_description:description,
            updated:'yes'
        })
        if(!invoice){
            console.log('no invoice was found');
            return false
        }
        return true
    },

    //updates the client invoice status 
    async Updateinvoicestatus(_, {invoiceId, status}){
        const invoice = await Clientinvoice.findByIdAndUpdate(invoiceId, {
            status,
            updated:'Yes'
        })
        if(!invoice){
            console.log('no invoice was found');
            return false
        }
        return true
    }
    },
    Query:{
    }
}