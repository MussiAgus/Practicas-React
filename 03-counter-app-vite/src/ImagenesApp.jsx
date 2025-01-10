import { useState } from "react";
import { LikeApp } from "./LikeApp";

const apiKey = "nhkTq2Xt8C8vGikWvYZN2qK9hK4bHikE";

export const ImagenesApp = () => {
    const [src, setSrc] = useState("");
    const [count, setCount]=useState(0);

    const cambiarImagen = () => {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=rs`)
        .then((res) => res.json())
        .then((data) => {
            setSrc(data.data.images.original.url); // Acceso correcto a la URL de la imagen
            setCount(count==0);
        })
    }
    return (
    <>
        <img src={src} alt="Imagen aleatoria" style={{ maxWidth: "90%" }} />
        <button onClick={cambiarImagen}>Busca una nueva!</button>
        <LikeApp value={count}/>
    </>
    );
}
