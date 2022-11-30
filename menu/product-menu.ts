import {ProductManagement} from "../managemnet/product/product-management"
import {Product} from "../model/product";
import {CategoryManagement} from "../managemnet/category-management/category-management";
let input = require(`readline-sync`)

enum ProductChoice {
    SHOW_ALL_PRODUCT = 1,
    CREAT_PRODUCT = 2,
    EDIT_PRODUCT = 3,
    DELETE_PRODUCT = 4,
    SEARCH_PRODUCT = 5,
    SORT_PRODUCT = 6,
    ADD_PRODUCT_TO_CATEGORY = 7,
    CHECKOUT = 0
}

export class ProductMenu {
    private productManagement = new ProductManagement();
    private static categoryManagement = new CategoryManagement();

    run() {
        let choice = -1
        do {
            console.log(`=========Quản lý sản phẩm=========
           1. Hiển thị danh sách sản phẩm
           2. Thêm sản phẩm
           3. Sửa sản phẩm
           4. Xóa sản phẩm
           5. Tìm kiếm sản phẩm
           6. Sắp xếp sản phẩm theo giá giảm dần
           7. Thêm sản phẩm vào trong danh mục
           0. Thoát`)
            choice = +input.question(`Enter choice : `)
            switch (choice) {
                case ProductChoice.SHOW_ALL_PRODUCT : {
                    this.showAllProduct()
                    break;
                }
                case ProductChoice.CREAT_PRODUCT : {

                    this.addProduct()
                    break;
                }

                case ProductChoice.EDIT_PRODUCT : {
                    let name = input.question(`Nhap ten san pham muon sua :  `)
                    let name1 = input.question(`Nhap ten moi : `)
                    let price = +input.question(`Nhap gia moi : `)
                    let description = input.question(`Nhap mo ta moi : `)
                    let product = new Product(name1, price, description)
                    this.editProduct(name, product)
                    break;
                }
                case ProductChoice.DELETE_PRODUCT : {
                    let name = input.question(`Nhap ten san pham muon xoa :  `)
                    this.deleteProduct(name)
                    break;
                }
                case ProductChoice.SEARCH_PRODUCT : {
                    let name = input.question(`Nhap ten san pham muon tim :  `)
                    this.searchProduct(name)
                    break;
                }
                case ProductChoice.ADD_PRODUCT_TO_CATEGORY : {
                    console.log(`========Thêm sản phẩm vào trong danh mục========`)
                    let categories = ProductMenu.categoryManagement.getAll()
                    let products = this.productManagement.getAll()
                    if (categories.length == 0) {
                        console.log(`Hiện tại chưa có danh mục sản phẩm nào......`)
                        break;
                    } else {
                        for (let i = 0; i < categories.length; i++) {
                            console.log(`id : ${i + 1},Tên danh mục :${categories[i]._name}, `);
                        }
                    }
                    let id = +input.question(`Nhap ma san pham can them vao danh muc : `)
                    let productIndex = this.productManagement.findById(id)
                    // console.log(productindex);

                    if (productIndex == -1) {
                        console.log(`Mã sản phẩm không tồn tại `)
                        break;
                    } else {
                        let categoryName = input.question(`Nhap ten danh muc can them : `)
                        let category = ProductMenu.categoryManagement.findbyName(categoryName);
                        if (category) {
                            products[productIndex].category = category
                            category.products.push(products[productIndex])
                        } else {
                            console.log(`Tên danh mục sản phẩm không tồn tại....`)
                        }
                        break;
                    }
                }
            }
        } while (choice != 0)
    }

    showAllProduct() {
        console.log(`==========danh sách sản phẩm==========`)

        let product = this.productManagement.getAll();
        for (let i = 0; i < product.length; i++) {
            console.log(`id : ${product[i].id}, Tên sản phẩm : ${product[i].name}, Giá : ${product[i].price}, Mô tả : ${product[i].description}, danh mục sản phẩm : ${product[i].category?.name}`)
        }
    }

    addProduct() {
        console.log(`==========thêm mới sản phẩm==========`)
        let product = this.inputProduct()
        this.productManagement.creatNew(product)
    }

    inputProduct() {
        let name = input.question(`Enter new name : `)
        let price = +input.question(`Enter new price : `)
        let description = input.question(`Enter description : `)

        return new Product(name, price, description)
    }

    editProduct(value: string, newProduct: Product): boolean {
        let choice = -1
        let product = this.productManagement.getAll()
        for (let i = 0; i < product.length; i++) {
            if (product[i].name == value) {
                choice = i
                break;
            }
        }

        if (choice != -1) {
            product[choice] = newProduct
            return true
        }
        return false
    }

    deleteProduct(name: string) {
        let choice = -1
        let product = this.productManagement.getAll()
        for (let i = 0; i < product.length; i++) {
            if (product[i].name == name) {
                choice = i
            }
        }
        if (choice != -1) {
            product.splice(choice, 1)
        }
    }

    searchProduct(name: string) {
        let product = this.productManagement.getAll()
        let index = -1
        for (let i = 0; i < product.length; i++) {
            if (index = -1) {
                index = i
                // return index
                if (name == product[index].name) {
                    console.log(`Tên sản phẩm ${product[index].name}, Giá : ${product[index].price}, ID sản phẩm : ${product[index].id}`)
                }
            }
            return index
        }

    }


}