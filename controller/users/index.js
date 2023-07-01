let data = [
    {
        name:"Praveen"
    },
    {
        name:"Parimala"
    },
    {
        name:"Ramar"
    },
    {
        name:"Praveena"
    }
]

exports.getUser = function(req,res){
    res.send({
        message:"Data Fetched succesfully",
        data
    })
}