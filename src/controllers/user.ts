import { Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { getCurrentUser, updatedCurrentUser } from "../services/user";

export const getUserCtrl = async (req:RequestExt, res:Response)=>{
    try {
        
        const newUser = await getCurrentUser(req.user?.id);
        res.send({
          data: "ESTO SOLO LO VE LAS PERSONS CON SESSION / JWT",
          user: newUser,
        });
      } catch (e) {
       res.send({mgs:e})
      }
}

export const postUserCtrl = async (req:RequestExt, res:Response)=>{
  try {
    const newData = req.body;
    const id = req.user?.id
    await updatedCurrentUser(newData, id)
    res.send({
      msg:'actualizado'
    })
  } catch (e) {
    res.send({mgs:e})
  }
}