import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth"

export const registerCtrl = async ({body}:Request, res:Response) => {  
    const resUser = await registerNewUser(body);
    res.send(resUser)   
}
export const loginCtrl = async ({body}:Request, res:Response) => {
    const resUser = await loginUser(body)
    res.send(resUser)
}