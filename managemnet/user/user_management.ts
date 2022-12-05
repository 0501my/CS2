

import { Role } from "../../model/e-role";
import { User } from "../../model/user";
import { Mismanagement } from "./i-user-anagement";

export class UserManagement implements Mismanagement {

    private static users : User[] = [];
    private static id : number = 1;
    constructor() {
        let admin = new User('admin','123456','dai123@gmail.com','Lê Tràng Đại')
        admin.id = UserManagement.id
        admin.role = Role.ADMIN
        UserManagement.users.push(admin)
    }
    login(username: string, passworld: string): User | null {
        for ( let item of UserManagement.users) {
            if (username == item.userName && passworld == item.passworld) {
                return item
            }
        }
        return null
    }
    findById(id: number): number {
        let index = -1
        for ( let i = 0 ; i < UserManagement.users.length ; i ++) {
            if(UserManagement.users[i].id == id) {
                index = i
                break;
            }
        }
        return 0
    }
    findUserName(userName: string): User | null {
        for ( let item of UserManagement.users ) {
            if (userName == item.userName) {
                return item;
            }
        }
        return null
    }
    getAll(): User[] {
        return UserManagement.users
    }
    creatNew(value: User): void {
        UserManagement.id++;
        value.id = UserManagement.id;
        value.role = Role.USER;
        UserManagement.users.push(value)

    }
    updateById(id: number, value: User): void {
        let index = this.findById(id)
        if ( index != -1) {
            UserManagement.users[index] = value
        }

    }
    removeById(id: number): void {
        let index = this.findById(id)
        UserManagement.users.splice(index,1)
    }
    findByEmail(email : string) : User | null{
        for ( let item of UserManagement.users) {
            if ( email == item.email) {
                return item
            }
        }
        return null
    }

}
