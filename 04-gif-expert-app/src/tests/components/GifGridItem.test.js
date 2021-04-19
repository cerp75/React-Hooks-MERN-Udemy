import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../componets/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = `Un título`;
    const url = `https://localhost/algo.jpg`;
    const wrapper = shallow( <GifGridItem title={ title } url={ url } />) ;

    test('debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();  // Crea un snapshot en la primera pasada o la compara con la existente.
    });

    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe( title);
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.prop('src'));

        expect(img.prop('src')).toBe( url );
        expect(img.prop('alt')).toBe( title );
    })

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        // console.log(div.props());
        // expect( div.prop('className').search('animate__fadeIn')!=-1 ).toBe(true)

        const className = div.prop('className');
        expect( className.includes('animate__fadeIn') ).toBe(true)
        // expect(img.prop('alt')).toBe( title );
    })

})
