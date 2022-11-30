
import { UserManagement } from '../managemnet/user/user_management';
import { Role } from '../model/e-role';
import { User } from '../model/user';
import { AdminMenu } from './admin-menu';
import { UserMenu } from './user-menu';
let input = require(`readline-sync`)

export class LoginMenu{
    private userMenu = new UserMenu();
    // choice = -1
    private userManagement = new UserManagement();
    private adminMemu = new AdminMenu();
    inputAcount() {
        console.log(`=========== Đăng kí tài khoản ===========`)
        let username = this.inputUserName();
        //Passworld
        let regexPass  : RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])[a-zA-Z0-9!@#$%^&*?]{6,12}$/g;
        let passworld = this.inputPass(regexPass) // done
        this.inputConfirmPassworld(passworld); //return pass
        let name = input.question(`nhap ten cua ban : `)
        let email = this.inputEmail() // check email
        let user = new User(username,passworld,email,name)
        return user
    }

    inputUserName () : string { // Đăng kí

        let username = '';
        let validUser = true
        do {
            username = input.question(`Nhap ten tai khoan cua ban :`)
            let currentUser = this.userManagement.findUserName(username);
            if(currentUser) {
                console.log(`Tên tài khoản đã tồn tại !!`)
                validUser = false
            } else {
                validUser = true;
            }
        } while (!validUser)
        return username
    }

    inputPass(regexPass : RegExp) : string {
        let password = ''
        let isValidPassWorld = true;
        do {
            password = input.question(`Nhap password :`);
            if(!regexPass.test(password)) {
                isValidPassWorld = false
                console.log(`Passworld nhập vào phải có ít nhất 1 ký tự thường, 1 hoa, 1 đặc biệt, độ dài 6-12 kí tự`)
            } else {
                isValidPassWorld = true;
            }
        } while (!isValidPassWorld)
        return password
    }

    inputConfirmPassworld(passworld : string) : string {
        let returnpassworld = ''
        do {
            returnpassworld = input.question(`Xac nhan lai mat khau : `)

            if (passworld != returnpassworld) {
                console.log(`Mật khẩu nhập vào không khớp !!`)
            }
        } while(passworld != returnpassworld)
        return passworld
    }

    inputEmail() : string{
        let email = '';
        let isValidEmail = true
        do {
            email = input.question(`Nhap Email cua ban : `);
            let currentUser = this.userManagement.findByEmail(email)
            let regexEmail : RegExp = /^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/g
            if (!regexEmail.test(email)) {
                isValidEmail = false
                console.log(`Định dạng email không hợp lệ`)
            } else {
                isValidEmail = true
                if (currentUser) {
                    isValidEmail = false
                    console.log(`Email đã tồn tại !!!`)
                } else {
                    isValidEmail = true
                }
            }

        } while (!isValidEmail)
        return email
    }

    Main() {
        let choice = -1
        do {
            console.log(`=========== Hệ thống quản lý sản phẩm ===========`);
            console.log(`1. Đăng nhập `);
            console.log(`2. Đăng kí `);
            console.log(`3. Thoát `);
            choice = +input.question(`Enter choice  :  `);
            switch(choice) {
                case 1 : {
                    // console.log(`Đăng nhập thành công !!!`)
                    let username = input.question(`Enter user name : `)
                    let password = input.question(`Enter password : `)
                    let currentUser = this.userManagement.login(username,password)
                    if (currentUser) {
                        console.log(`==========ĐĂNG NHẬP THÀNH CÔNG==========`)
                        if (currentUser.role == Role.ADMIN) {
                            this.adminMemu.run()
                        } else {
                            this.userMenu.run(currentUser);
                        }
                    } else (
                        console.log(`Tài khoản hoặc mật khẩu không đúng !!!!`)
                    )
                    break ;
                }
                case 2: {
                    let user = this.inputAcount()
                    this.userManagement.creatNew(user);
                    break ;
                }
            }
        } while (choice != 0)
    }
}