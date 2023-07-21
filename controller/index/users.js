const usrs = [
    {
    name: "John Doe",
},{
    name:"Praveen"
},{
    name:"Ragul"
}]

exports.getUser = function(req,res){
    res.send({
        message:"Data retrived successfully",
        usrs
    })
}