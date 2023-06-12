import { NextFunction, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";

export const checkJwt = (req:RequestExt, res:Response, next:NextFunction) =>{
    try {
        const jwtByUser = req.headers.authorization || null;
        const jwt = jwtByUser?.split(' ').pop()
        const isUser = verifyToken(`${jwt}`) as {id:string}
        if (!isUser) {
            res.status(401);
            res.send("NO_TIENES_UN_JWT_VALIDO");
          } else {
            req.user = isUser;
            next();
          }
    } catch (error) {
        res.status(400)
        res.send("session no found")
    }
}