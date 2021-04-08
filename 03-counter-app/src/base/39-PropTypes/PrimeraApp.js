import React from 'react'
import PropTypes from 'prop-types';
// import { Fragment } from 'react'

//FC
const PrimeraApp = ( { saludo }) => {

    // if(!saludo){
    //     throw new Error('El saludo es necesario');
    // }

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{ JSON.stringify(saludo, null,3) }</pre> */}
            <p>Mi primera aplicación</p>
        </>
);
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
export default PrimeraApp;