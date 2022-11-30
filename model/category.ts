
import { Product } from "./product"

export class Category {
    _id : number = 0
    _name : string
    _products : Product[] = []
    constructor(name : string) {
        this._name = name
    }

    get name() {
        return this._name
    }
    set name(value : string) {
        this._name = value
    }

    get id() {
        return this._id
    }
    set id(value : number) {
        this._id = value
    }

    get products() : Product[] {
        return this._products
    }
    set products(value : Product[]) {
        this._products = value
    }
}