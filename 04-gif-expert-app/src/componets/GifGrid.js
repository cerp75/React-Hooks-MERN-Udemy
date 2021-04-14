import React, { useState, useEffect} from 'react'

export const GifGrid = ({ category}) => {
    

    const [count, setCount] = useState(0);
    
    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const apiKey = 'V4Mo3oO7Kz8256h8BYGGS86xSRMP0H3W';
        const url = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morthy&limit=10&api_key=${apiKey}`;
        const resp = await fetch(url)
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
    }
    
    return (
        <div>
            <h3>
                { category } 
            </h3>
            <h2>{count}</h2>
            <button onClick={ ()=> setCount( count + 1 ) }></button>
        </div>
    )
}
