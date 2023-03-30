export const getGifs = async( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=XYnOD0d7yCCC4To3dgmqe6nCAELTzNq2&q=${ category }&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return (gifs);

}
