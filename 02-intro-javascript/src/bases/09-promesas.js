
// import {getHeroeById, getHeroesByOwner} from './bases/08-imp-exp'
import {getHeroeById} from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         //Tarea
//         // Importar el
//         const h = getHeroeById(2);
//         resolve(h);
//         // reject('No se pudo encontrar el héroe.');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('Heroe', heroe)
// }).catch(e => console.log(e));

const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            //Tarea
            // Importar el
            const h = getHeroeById(id);
            if(h){
                resolve(h);
            }else{
            reject('No se pudo encontrar el héroe.');
            }
        }, 2000);
    });
}

// getHeroesByIdAsync(2)
//     .then(h => console.log('Heroe',h))
//     .catch(e => console.warn(e));

getHeroesByIdAsync(2)
    .then(console.log)
    .catch(console.warn);

    