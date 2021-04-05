
//Funciones en JS
// const saludar = function (nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2 =  (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 =  (nombre) => `Hola, ${nombre}`;
const saludar4 =  () => `Hola Mundo`;

// console.log(saludar('Goku'));
// console.log(saludar);
console.log(saludar2('Vicente'));
console.log(saludar3('Cristian'));
console.log(saludar4());



const getUSer = () => ({
        uid:'ABC123',
        username:'El_Papi1502'
    })

    const user = getUSer();
console.log(user);

// Tarea
// 1. Transformar a una funcion de Flecha
// 2. Tiene que retornar un objeto implísito
// 3. Pruebas

const getUsuarioActivo = (nombre) =>({
        uid: 'ABC567',
        username: nombre
    })

    const usuarioActivo = getUsuarioActivo('Cristian');
    console.log(usuarioActivo);
