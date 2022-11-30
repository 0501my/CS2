import { Category } from "./category";

export class Product {
    private _id : number = 0
    private _name : string ;
    private _price : number;
    private _description : string
    private _category : Category | null = null
    // private _amount : number = 0

    constructor ( name : string, price : number, description : string) {
        this._name = name;
        this._price = price;
        this._description = description

    }

    get id(): number {
        return this._id
    }
    get name() : string {
        return this._name
    }
    get price() : number {
        return this._price
    }
    get description() : string {
        return this._description
    }

    get category() : Category | null{
        return this._category
    }

    // get amout() : number{
    //     return this._amount
    // }

    // set amout(value : number){
    //     this._amount = value}

    set id(value : number){
        this._id = value
    }
    set name(value : string)  {
        this._name = value
    }
    set price(item : number) {
        this._price = item
    }
    set description( value : string) {
        this.description = value
    }
    set category(value : Category | null) {
        this._category = value
    }

}