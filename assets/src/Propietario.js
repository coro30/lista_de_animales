export default class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = () => nombre;
    }
    get nombre() {
        return this._nombre();
    }
    set nombre(new_nombre){
        return this._nombre();
    }

    get direccion() {
        return this._direccion();
    }
    set direccion(new_direccion){
        return this._direccion();
    }
    get telefono() {
        return this._telefono();
    }
    set telefono(new_telefono){
        return this._telefono();
    }
}

