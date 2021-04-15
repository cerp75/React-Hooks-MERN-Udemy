

export const getGifs = async( category ) => {

          const apiKey = 'V4Mo3oO7Kz8256h8BYGGS86xSRMP0H3W';
          const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=3&api_key=${apiKey}`;
          const resp = await fetch(url)
          const {data} = await resp.json();
  
          const gifs = data.map(img => {
              return {
                  id: img.id,
                  title: img.title,
                  url: img.images?.downsized_medium.url
              }
          })
  
          // console.log(gifs);
          return gifs;
      }
  