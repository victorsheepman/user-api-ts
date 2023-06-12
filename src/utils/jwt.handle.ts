import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'token83290839'

export const generateToken = (id:string) => {
    const jwt = sign({id}, JWT_SECRET, {
        expiresIn:'2h'
    })
    return jwt
}


export const verifyToken = (token:string) => verify(token, JWT_SECRET)