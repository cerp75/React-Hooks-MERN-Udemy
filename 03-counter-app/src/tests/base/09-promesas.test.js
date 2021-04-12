import {getHeroeByIdAsync} from '../../base/09-promesas';
import heroes from '../../data/Heroes';
// jest.setTimeout(10000);

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe de retornar un Héroes async', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe =>{

            expect(heroe).toBe(heroes[0]);
            done();
        })
    })

    test('Debe obtener un error si el héroes por id no existe', ( done ) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })
    })
})
