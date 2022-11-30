import { User } from "../../model/user";
import { IManagement } from "../i-management";


export interface Mismanagement extends IManagement <User> {
    findUserName (userName : string) : User | null;
    findByEmail (email : string) : User | null
    login(username : string, password : string) : User | null
}