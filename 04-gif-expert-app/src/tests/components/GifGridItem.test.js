import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../componets/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    test('debe de mostrar el componente correctamente', () => {
        const wrapper = shallow( <GifGridItem />) ;

        expect(wrapper).toMatchSnapshot();  // Crea un snapshot en la primera pasada o la compara con la existente.
    })
})
