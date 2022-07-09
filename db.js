const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/meanDB1',(err)=>{
    if(!err){
        console.log('connected to MongoDB')
    }else{
        console.log(`Error in Connection${err}`)
    }
})
module.exports=mongoose