import User from "../models/User";

export class AuthRegisterUserController {
    static async init(req,res){
        res.send({message: 'welcome to API'})
    }
}