
describe('Pruebas en el archivo demo.js', () => {
    test('Deben de ser iguales los string', () => {
    
        //1. inicialización
        const mensaje = 'Hola Mundo';
    
        //2. estímulo
        const mensaje2 = `Hola Mundo`;
    
        //3. Observar el comporxxtamiento
        expect(mensaje).toBe(mensaje2);
        
    })
})
