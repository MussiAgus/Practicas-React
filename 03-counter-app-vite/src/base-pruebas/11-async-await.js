export const getImagen = async() => {

    try {

        const apiKey = 'nhkTq2Xt8C8vGikWvYZN2qK9hK4bHikE';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
    
    
}
