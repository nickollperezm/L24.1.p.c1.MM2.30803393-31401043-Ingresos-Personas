export default class Cl_ingresos {
    constructor() {
        this.acumIngresosMujeres = 0;
        this.contMujeres = 0;
        this.mayorIngreso = 0;
        this.nombreMayor = "";
    }

    procesarPersona(persona) {
        if (persona.sexo == "F") {
            this.acumIngresosMujeres += persona.ingreso;
            this.contMujeres++;
        }
        if (persona.ingreso > this.mayorIngreso) {
            this.mayorIngreso = persona.ingreso;
            this.nombreMayor = persona.nombre;
        }
    }

    promIngresosMujeres() {
        return this.acumIngresosMujeres / this.contMujeres;
    }

    nombreIngresoMayor() {
        return this.nombreMayor;
    }

    montoIngresoMayor() {
        return this.mayorIngreso;
    }
}