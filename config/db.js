const mongoose=require("mongoose")


const connetDB=async()=>{

    try{
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Database conneted".cyan.underline)

    }catch(err){
        console.log(err.message)
    }

}
module.exports=connetDB