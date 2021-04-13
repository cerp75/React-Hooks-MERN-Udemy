import { getImagen } from "../../base/11-async-await"


describe('Pruebas con asybc-await y fecth', () => {
    test('debe de retornar el url de la imagen', async() => {

        const url = await getImagen();
        // expect (typeof url).toBe('string');
        // console.log(url);
        expect (url.includes('https://')).toBe(true);
    })
})
