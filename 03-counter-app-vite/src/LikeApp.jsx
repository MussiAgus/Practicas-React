import { useState, useEffect } from "react";

export const LikeApp=({value})=>{
    const [count, setCount]=useState(value);    
    
    useEffect(() => {
        setCount(value);
    }, [value]);
    
    const sumar=()=>{
        setCount(count+1);
    }
    const sacar=()=>{
        if(count>=1)
            setCount(count-1);
    }
    const restart=()=>{
            setCount(value);
    }
    return(
        <>
            <h1>Likes: {count}</h1>
            <button onClick={sumar}> Agregar </button>
            <button onClick={sacar}> Sacar </button>
            <button onClick={restart}> Reiniciar </button>
        </>);
}