import { Category } from "../../model/category";
import { ICategoryManagement } from "./i-category-management";

export class CategoryManagement implements ICategoryManagement {
    private static id : number = 0
    private static categories : Category[] = []
    findbyName(name: string): any {
        for ( let item of CategoryManagement.categories ) {
            if (name == item.name) {
                return item;
            }
        }
        // CategoryManagement.categories.forEach((item)=>{
        //     if(item._name.includes(name))
        //     {
        //         console.table(CategoryManagement.categories)
        //     }
        // })
    }


    getAll(): Category[] {
        return  CategoryManagement.categories;
    }
    creatNew(value: Category): void {
        value._id = CategoryManagement.id++
        CategoryManagement.categories.push(value);
    }
    updateById(id: number, value: Category): void {
        value._id = CategoryManagement.id++
        let index = this.findById(id) ;
        if (index !=-1) {
            CategoryManagement.categories[index] = value
        }
        ;
    }
    removeById(id: number) :void {
        let index = this.findById(id);
        if(id == -1) {
            console.log(`không có `)
        }else {
            CategoryManagement.categories.splice(index,1)
        }
    }
    findById(value: number): number {
        let index = -1
        for ( let i = 0; i < CategoryManagement.categories.length; i ++) {
            if(value == CategoryManagement.categories[i]._id)
                index = i;
        }
        return index
    }

}