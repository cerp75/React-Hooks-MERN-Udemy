// import {heroes} from './data/heroes';
// import { heroes } from './data/heroes'

// import heroes, {owners} from "../data/heroes"
import heroes from "../data/heroes"

// console.log(owners);

// const getHeroeById = (id) => {
//     return heroes.find((heroe)=>{
//         if(heroe.id===id){
//             return true;
//         }else{
//             return false;
//         }
//     })
// }

// const getHeroeById = (id) => {
//     return heroes.find(x => x.id===id);
// }

export const getHeroeById = (id) =>  heroes.find(x => x.id===id);

// console.log(getHeroeById(2));

//find?, filter 
export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner===owner);

// console.log(getHeroesByOwner('DC'));
