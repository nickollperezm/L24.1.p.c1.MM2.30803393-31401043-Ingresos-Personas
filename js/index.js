/*
Dado el nombre, sexo (F-M) y el ingreso de varias personas. Determinar e imprimir:
promedio de ingreso de las mujeres y el monto de ingreso mayor y quien lo tiene.

Se dispone de los siguientes datos de varias personas: (nombre, sexo, ingreso) (Mary, F,
150), (José, M, 135), (Carlos, M, 160), (Pedro, M, 75), (Rosa, F, 120), (Carmen, F, 120)

Promedio de ingreso de las mujeres: 130
Nombre de la persona con mayor ingreso: Mary con un ingreso de 150$
*/

import Cl_persona from "./Cl_persona.js";
import Cl_ingresos from "./Cl_ingresos.js";

let ingresos = new Cl_ingresos();
let persona1 = new Cl_persona("Mary", "F", 150);
let persona2 = new Cl_persona("José", "M", 135);
let persona3 = new Cl_persona("Carlos", "M", 160);
let persona4 = new Cl_persona("Pedro", "M", 75);
let persona5 = new Cl_persona("Rosa", "F", 120);
let persona6 = new Cl_persona("Carmen", "F", 120);
ingresos.procesarPersona(persona1);
ingresos.procesarPersona(persona2);
ingresos.procesarPersona(persona3);
ingresos.procesarPersona(persona4);
ingresos.procesarPersona(persona5);
ingresos.procesarPersona(persona6);

let salida = document.getElementById("salida");
salida.innerHTML = `
Promedio de ingreso de las mujeres: ${ingresos.promIngresosMujeres()}
<br>Nombre de la persona con mayor ingreso: ${ingresos.nombreIngresoMayor()} con un ingreso de ${ingresos.montoIngresoMayor()}$
`;