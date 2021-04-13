import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from "../CounterApp";

describe('Pruebas básicas del CounterApp', () => {
    
    // let wrapper; //undefined
    let wrapper = shallow( <CounterApp />) // define el objeto para usar intellicense. Solo de maña

    beforeEach(()=>{    // Se ejecuta antes de cada test
        wrapper = shallow( <CounterApp />) // vuelve a inicializar wrapper antes de cada prueba. 
    })

    test('debe mostrar <CounterApp /> correctamente (hacer match con un snapshot y sus valores por defecto)', () => {

        expect(wrapper).toMatchSnapshot();  // Crea un snapshot en la primera pasada o la compara con la existente.
    });

    test('debe de mostrar el valor por defecto de 100', () => {

        const valorInicial = 100;
        const wrapper = shallow( <CounterApp value={ valorInicial } />)
        const txtTag = wrapper.find('h2').text();
        const txtHtml = ` ${valorInicial} `;

        expect(txtHtml).toBe(txtTag);
    })
    
    test('debe de incrementar con el botón +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    })

    test('debe de decrementar con el botón -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    })

    test('debe de colocar el valor por defecto con btn reset', () => {
        
        const valorInicial = 105;
        const wrapper = shallow( <CounterApp value={ valorInicial } />)

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe(`${valorInicial}`);
    })
    
    
})
