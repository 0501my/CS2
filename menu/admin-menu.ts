
import { CategoryMenu } from './category-menu';
import { ProductMenu } from './product-menu';
enum AdminChoice {
    PRODUCT_MANAGEMENT = 1,
    CATEGORY_MANAGEMENT = 2,

}
let input = require(`readline-sync`)
export class AdminMenu{
    private productMenu = new ProductMenu();
    private categoryMenu = new CategoryMenu()
    run() {
        let choice = -1
        do {
            console.log(`============Quản lý cửa hàng============`)
            console.log(`1. Quản lý  sản phẩm`)
            console.log(`2. Danh mục sản phẩm`)
            console.log(`0. Đăng xuất`)
            choice = +input.question(`Enter choice :`)
            switch (choice) {
                case AdminChoice.PRODUCT_MANAGEMENT : {
                    // console.log(`1. Quản lý sản phẩm`)
                    this.productMenu.run();
                    break;
                }
                case AdminChoice.CATEGORY_MANAGEMENT : {
                    this.categoryMenu.run()
                    break;
                }
            }

        } while (choice != 0)
    }
}