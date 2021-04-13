import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    /*
    test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {

        const saludo = 'Hola, soy Goku';
        const { getByText } = render(<PrimeraApp saludo={saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument();
    })
    */

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = "Hola, soy Goku"
        const wrapper = shallow( <PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot();  // Crea un snapshot en la primera pasada o la compara con la existente.
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {

        const saludo = "Hola, soy Goku"
        const subTitulo = "Soy un subtitulo"
        const wrapper = shallow( <PrimeraApp 
            saludo={saludo} 
            subtitulo={subTitulo} 
        />)

        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo);

        expect(textoParrafo).toBe(subTitulo);

    })

})
