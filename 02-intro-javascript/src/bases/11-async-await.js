
const getImagen = async() => {

try {
    const apiKey = 'V4Mo3oO7Kz8256h8BYGGS86xSRMP0H3W';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data:{images:{original:{url}}}} = await resp.json();

    console.log(url);

    // const {url} = data.images.original;
    const img = document.createElement('img');

    img.src = url;
    document.body.append(img);
} catch (error) {
    //manejo del error
    console.error(error);
}

}

getImagen();







// const apiKey = 'V4Mo3oO7Kz8256h8BYGGS86xSRMP0H3W';

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then(resp => resp.json())
//     .then(({data}) => {
//         const {url} = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);

//     })
// .catch(console.warn)