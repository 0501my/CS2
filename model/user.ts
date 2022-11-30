import { AddCart } from "./addtocard";
import { Product } from "./product";

export class User {
    private _username : string;
    private _passworld : string;
    private _role : number = 0;
    private _email : string;
    private _name : string;
    private _id : number = 0;
    private _cart = new AddCart()

    constructor(username : string ,passworld :string,email: string,name : string) {
        this._username = username;
        this._passworld = passworld;
        this._email = email;
        this._name = name;
    }
    get userName () {
        return this._username
    }
    set userName(value : string) {
        this._username = value
    }

    get passworld () {
        return this._passworld
    }
    set passworld(value : string) {
        this._passworld = value
    }

    get email () {
        return this._email
    }
    set email(value : string) {
        this._email = value
    }

    get name () {
        return this._name
    }
    set name(value : string) {
        this._name = value
    }

    get role () {
        return this._role
    }
    set role(value : number) {
        this._role = value
    }

    get id () {
        return this._id
    }
    set id(value : number) {
        this._id = value
    }

    addToCart(t: Product) {
        this._cart.add(t);
    }

    getCart(): Product[] {
        return this._cart.productInCart;
    }

    getTotalMoney(): number{
        return this._cart.getTotalMoney();
    }

    remove(index: number) {
        this._cart.remove(index);
    }
}