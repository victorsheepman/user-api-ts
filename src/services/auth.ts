import { IAuth } from "../interfaces/auth.interface"
import { IUser } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/handlerPassword"
import { generateToken } from "../utils/jwt.handle"

export const registerNewUser =async ({email, password, name}: IUser) => {
    
    const checkIs = await UserModel.findOne({ email })
    if(checkIs) return "already user"
   
    const hashPassword = await encrypt(password);
    const registerNewUser = await UserModel.create({
        name,
        email,
        password:hashPassword,
        description:'',
        phone:0,
        bio:''
    })
   
    return registerNewUser
}

export const loginUser = async ({email, password}: IAuth) => {

    const checkIs = await UserModel.findOne({ email })
    if(!checkIs) return "User no Found"
    
    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash);
    if(!isCorrect) return 'password incorrect'
    
    const token = generateToken(checkIs.email)
    const data = {
        token,
        user:checkIs
    }
    
    return data
}