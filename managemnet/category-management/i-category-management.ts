import { Category } from "../../model/category";
import { IManagement } from "../i-management";

export interface ICategoryManagement extends IManagement<Category>{
    findbyName(name : string) : Category }