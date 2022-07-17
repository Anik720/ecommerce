const mongoose=require("mongoose")


const connetDB=async()=>{

    try{
        await mongoose.connect("mongodb+srv://anik:ValoBasa420@cluster0.d0okn.mongodb.net/?retryWrites=true&w=majority")

        console.log("Database conneted".cyan.underline)

    }catch(err){
        console.log(err.message)
    }

}
module.exports=connetDB