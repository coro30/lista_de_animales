export default class Animal {
    constructor(tipo) {
        this._tipo = () => tipo;
    }
    get tipo() {
        return this._tipo();
    }
    set tipo(new_tipo){
        return this._tipo();
    }
}

