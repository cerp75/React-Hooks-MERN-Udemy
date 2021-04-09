import '@testing-library/jest-dom';
import moduleName, { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto',()=> {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    // getUsuarioActivo debe retornar un objeto
    test('getUSerActivo debe retornar un objeto', () => {

        const nombre = 'cerp75';

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
    
})
