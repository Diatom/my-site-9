export class List {
    constructor(arr) {
        this.arr = arr;
        this.obj = this.buildCheese();
    }
    get cheese() {
        return this.obj;
    }
    buildCheese() {
        const keys = ['name', 'age', 'milk', 'since', 'type', 'mold', 'taste', 'description'];
        const obj = {};
        for (const prop in keys) {
            obj[keys[prop]] = this.arr[prop];
        }
        return obj;
    }
}