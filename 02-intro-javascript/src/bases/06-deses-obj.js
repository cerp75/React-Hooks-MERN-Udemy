
// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const {edad, clave, nombre, } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({clave, nombre, edad, rango='Capitan'} ) => {
    // const {edad, clave, nombre, } = usuario;
    // console.log(nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latLng :{
            lat:123.312,
            lng:332
        }
    }
}

const {nombreClave, anios, latLng:{lat,lng}} = useContext (persona);

console.log(nombreClave, anios);
console.log(lat, lng);