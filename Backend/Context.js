function context({req, res}) {
    return {
        isLoggedin:true,
        stuff:true
    }
}

module.exports = context