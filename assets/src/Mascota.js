import Animal from './Animal.js'

export default class Mascota extends Animal{
    constructor(nombre, tipo, enfermedad="sin enfermedad"){
        super(tipo)
        this._nombre = ()=>nombre
        this._enfermedad = ()=>enfermedad
    }

    get nombre(){
        return this._nombre()
    }

    set carrera(new_nombre){
        return this._nombre = ()=>new_nombre
    }

    get enfermedad(){
        return this._enfermedad()
    }

    set nota(new_enfermedad){
        return this._enfermedad = ()=>new_enfermedad
    }
}