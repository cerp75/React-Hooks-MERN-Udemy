import React from 'react'
// import { Fragment } from 'react'

//FC
const PrimeraApp = ( {saludo='Hola Mundo'}) => {



    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{ JSON.stringify(saludo, null,3) }</pre> */}
            <p>Mi primera aplicación</p>
        </>
);
}

export default PrimeraApp;