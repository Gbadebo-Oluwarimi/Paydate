async function context({req, res}) {
    return {
        isLoggedin:true,
        stuff:true,
        token: await req.session
    }
}

module.exports = context