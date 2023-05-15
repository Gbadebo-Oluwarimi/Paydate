module.exports = {
    gettoken: async(req) => {
        console.log("Worked", await req.session);
    }
}