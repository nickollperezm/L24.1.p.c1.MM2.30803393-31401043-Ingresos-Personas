export default class Cl_persona {
    constructor(nombre, sexo, ingreso) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.ingreso = ingreso;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
    set ingreso(ingreso) {
        this._ingreso = ingreso;
    }
    get ingreso() {
        return this._ingreso;
    }
}