import { Product } from "./product";
export class AddCart{
    private _totalMoney : number = 0
    private _productInCard : Product[] = [];

    constructor() {

    }
    get totalMoney () {
        return this._totalMoney
    }
    set totalMoney(value : number) {
        this._totalMoney = value
    }

    get productInCart () {
        return this._productInCard
    }
    set productInCart (value : Product[]) {
        this._productInCard = value
    }

    add(t: Product): void {
        this._productInCard.push(t);
    }

    findByName(name: string): number | null{
        let current = true;
        let index = -1;
        for (let i = 0; i < this._productInCard.length; i++) {
            if (name == this._productInCard[i].name) {
                index = i;
                current = true;
                break;
            }
        }
        if (current){
            return index;
        }else {
            return null;
        }
    }

    remove(i: number) {
        this._productInCard.splice(i, 1);
    }

    getTotalMoney(): number {
        let totalMoney: number = 0;
        for (let service of this._productInCard) {
            totalMoney += (service.price)
        }
        return totalMoney;
    }
}