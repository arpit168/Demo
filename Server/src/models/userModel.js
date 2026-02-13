import mongoose from "mongoose";

const userSchema = mongoose.schema(
    {
        fullName:{
            type: String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        mobileNumber:{
            type:Number,
            required:true,
        },
        password: {
            type:String,
            required:true,
        },
       
    },
     {timeStamps:true},
)

const User = mongoose.model("User",userSchema)
export default User;