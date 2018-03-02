export interface CrudService {
    getAll();
    get(id: any);
    add(recode: any);
    update(recode: any);
    remove(id: any);
}