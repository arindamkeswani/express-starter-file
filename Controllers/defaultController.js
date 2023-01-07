


module.exports.getDefaultRoute = async function getDefaultRoute(req,res){
    return res.status(200).json({
        status: "OKAY",
        message: "Default Endpoint",
        data: {
            port: __port
        }
    })
}
