
import { CategoryManagement } from '../managemnet/category-management/category-management'
import { ProductManagement } from '../managemnet/product/product-management'
import { Product } from '../model/product'
import { User } from '../model/user'
let input = require(`readline-sync`)

export class UserMenu {
    private categoryManagement = new CategoryManagement()
    private productManagement = new ProductManagement()
    private productInCard : Product[] = [];
    run(currentUser: User) {
        let choice = -1
        do {
            console.log(`============VinMart============
            1. Tìm kiếm mặt hàng
            2. Tìm kiếm theo danh mục 
            3. Giỏ hàng 
            4. Tiến hành thanh toán 
            0. Đăng xuất`)
            choice = +input.question(`Enter choice : `)
            switch (choice) {
                case  1: {
                    console.log(`==========danh sách sản phẩm==========`)
                    this.showAllProduct()
                    let name = input.question(`Nhap ten san pham can tim : `)
                    let display = this.seachProduct(name)
                    console.log(display?.name,display?.price)
                    break;
                }
                case  2: {
                    console.log(`Danh sách danh mục sản phẩm`)
                    let name = input.question(`Nhap ten danh muc san pham can tim : `)
                    let categories = this.categoryManagement.findbyName(name)
                    if(categories) {
                        for (let i = 0; i < categories._products.length; i++ ) {
                            console.log(`STT : ${i + 1}, Tên sản phẩm : ${categories._products[i].name}, Giá : ${categories._products[i].price}, Mô tả : ${categories._products[i].description}, danh mục : ${categories._products[i].id}`)
                        }
                    } else {
                        console.log(`Tên danh mục sản phẩm không tồn tại .....`)
                        break;
                    }
                    break;
                }
                case 3 : {
                    let index = -1
                    let id = +input.question(`Enter id : `)
                    let getAll = this.productManagement.getAll()
                    for ( let i = 0 ; i < getAll.length; i ++) {
                        if (getAll[i].id == id) {
                            index = i
                        }
                    } currentUser.addToCart(getAll[index])
                    break;
                }
                case 4 : {
                    console.log(`========== Thanh toán ==========`)
                    let getAll = currentUser.getCart()
                    let tinhTien = currentUser.getTotalMoney()
                    for ( let item of getAll) {
                        console.log(`tên : ${item.name}, giá ${item.price}`)
                    }
                    console.log(`Tổng thành tiền : ${tinhTien}`)
                }
            }
        } while (choice != 0)
    }

    seachProduct(name : string) {
        let choice = -1
        let product = this.productManagement.getAll()
        for (let i = 0; i < product.length; i ++) {
            if (product[i].name == name) {
                choice = i
            }
        }
        if (choice != -1) {
            return product[choice]
        }
    }
    showAllProduct() {
        console.log(`==========danh sách sản phẩm==========`)

        let product = this.productManagement.getAll();
        // console.table(product)
        for (let i = 0; i < product.length; i++ ) {
            console.log(`id:${product[i].id}, Tên sản phẩm : ${product[i].name}, Giá : ${product[i].price}, Mô tả : ${product[i].description}, danh mục sản phẩm:${product[i].category?.name}`)
        }
    }

    getAll() {

    }
}
