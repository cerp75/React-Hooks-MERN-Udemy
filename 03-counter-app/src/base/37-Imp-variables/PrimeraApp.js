import React from 'react'
// import { Fragment } from 'react'

//FC
const PrimeraApp = () => {

    // const saludo = {
    //     nombre:'Cristian',
    //     edad:45
    // };

    const saludo = 'Hola Mundo';
    
    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{ JSON.stringify(saludo, null,3) }</pre> */}
            <p>Mi primera aplicación</p>
        </>
);
}

export default PrimeraApp;