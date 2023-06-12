
import { IUser } from "../interfaces/user.interface";
import UserModel from "../models/user"

export const getCurrentUser = async (token:string) => await UserModel.findOne({email:token})

export const updatedCurrentUser =async (data:any, emailId:string) => {
    const user  = await UserModel.findOne({email:emailId});
    for (let key in data) {
        // @ts-ignore
        user[key] = data[key]
    } 
    await user?.save()
}