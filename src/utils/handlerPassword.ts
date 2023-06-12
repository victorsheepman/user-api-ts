import {hash, compare} from "bcryptjs"

export const encrypt = async (password:string)=> await hash(password, 10)

export const verified = async (password:string, userPassword:string) => await compare(password, userPassword)