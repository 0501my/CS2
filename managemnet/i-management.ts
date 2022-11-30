export interface IManagement <T> {
    getAll() : T[];
    creatNew(value : T) : void;
    updateById(id : number, value : T) : void;
    removeById (id : number) : void;
    findById(id: number) : number;
}