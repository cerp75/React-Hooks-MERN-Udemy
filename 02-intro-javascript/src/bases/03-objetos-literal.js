
const persona ={
    nombre:'Tony',
    apellido: 'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip: 484222115,
        lat:14.234,
        lng:4423.3234
    }
}

// console.table({persona})

const persona2 = {...persona}; //clon
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2)