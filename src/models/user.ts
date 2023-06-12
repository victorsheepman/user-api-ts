import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const UserSchema = new Schema<IUser>(
    {
        name:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        description:String,
        bio:String,
        phone:String
    },
    {
        versionKey:false,
        timestamps:true
    }
)


const UserModel = model('users', UserSchema)

export default UserModel