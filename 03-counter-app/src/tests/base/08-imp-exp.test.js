import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/Heroes";

describe('Pruebas en funciones de Héroes', () => {
    test('Debe de retornar un Héroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroesData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroesData);
    });
    
    test('Debe de retornar undefined cuando héroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    // owner
    // toEqual al arreglo filtrado
    test('debe de retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';
        const heroesOwner = getHeroesByOwner(owner);

        // const arr = [
        //     { id: 1, name: 'Batman', owner: 'DC' },
        //     { id: 3, name: 'Superman', owner: 'DC' },
        //     { id: 4, name: 'Flash', owner: 'DC' }
        //   ];
        // console.log(heroesOwner);
        // expect(heroesOwner).toEqual(arr);

        const arrData = heroes.filter(h=>h.owner==='DC');
        expect(arrData).toEqual(heroesOwner);

    })

    // length = 2 // ToBe
    test('debe de retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroesOwner = getHeroesByOwner(owner);

        // console.log(heroesOwner);
        expect(heroesOwner.length).toBe(2);
    })

})
