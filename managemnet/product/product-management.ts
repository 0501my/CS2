import {Product} from "../../model/product";
import {IProductManagement} from "./i-product-management";

export class ProductManagement implements IProductManagement {
    private static id: number = 1;
    private static products: Product[] = [];

    getAll(): Product[] {
        return ProductManagement.products;
    }

    creatNew(value: Product): void {
        // ProductManagement.id++
        value.id = ProductManagement.id++
        ProductManagement.products.push(value);

    }


    updateById(id: number, value: Product): void {
        throw new Error("Method not implemented.");
    }

    removeById(id: number): void {
        throw new Error("Method not implemented.");
    }

    findById(id: number): number {
        let index = -1
        for (let i = 0; i < ProductManagement.products.length; i++) {
            if (ProductManagement.products[i].id == id) {
                index = i
            }
        }
        return index
    }

}