import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from "../CounterApp";

describe('Pruebas básicas del CounterApp', () => {
    
    test('debe mostrar <CounterApp /> correctamente (hacer match con un snapshot y sus valores por defecto)', () => {
        
        const wrapper = shallow( <CounterApp />)

        expect(wrapper).toMatchSnapshot();  // Crea un snapshot en la primera pasada o la compara con la existente.
    });

    test('debe de mostrar el valor por defecto de 100', () => {

        const valorInicial = 100;
        const wrapper = shallow( <CounterApp value={ valorInicial } />)
        const txtTag = wrapper.find('h2').text();
        const txtHtml = ` ${valorInicial} `;

        expect(txtHtml).toBe(txtTag);
    })
    
    
})
