/*
//En este programa, lo que se hace es mandar una funcion desde el padre hasta el hijo, con el fin de setearlo desde
//aca. Pero hay otra forma mas sencilla, en la que el hijo (o sea, esta app), le manda el evento al padre, para que
//este pueda procesarlo desde su mismo codigo


import { useState } from "react";

//Aca le estoy mandando el setCategorias desde la otra app, la cual es encargada de actualizar la lista.
export const AddCategory=({setCategorias})=>{

    const [inputValue, setInputValue]=useState("");
    
    //La funcion setea a inputValue con el valor ingresado por el usuario.
    const onInputChange=({target})=>{
        //en target.value se guardara el valor de lo que se escriba en el imput.
        setInputValue(target.value)
    }
    //La funcion, se encargara de actualizar las categorias, haciendo uso de la funcion pasada por propiedad desde
    //GifExpertApp.
    const onSubmit=(event)=>{

        //Esto hace que no se recargue la pagina al ingresar un value.
        event.preventDefault();
        
        //setCategorias setea a "categorias", la cual se encuentra en la otra app.
        //¿Que pasa? cat se carga con los valores que ya tiene la "categorias" externa, la cual provee setCategorias.
        // Una vez hace la union del input con lo que le de cat, el resultado es seteado por setCategorias, y se asinga
        //al "categorias" externo.
        setCategorias(cat=>[inputValue,...cat]);
        
        //esto es para, cuando termine de ingresar el nuevo elemento del array, el value se ponga en blanco, y deje
        //libre la caja de texto.
        setInputValue("");
    }
    return (
        
        //onSubmit se ejecutara cada vez que el usuario aprete enter.
        <form onSubmit={(event)=>onSubmit(event)}>
            <input 
                
                //le decimos al html que sera para ingresar texto
                type="text"
                
                //es lo que aparece al no haber texto en el recuadro
                placeholder="Categoria"
                
                //vincula el valor del input, con el estado
                value={inputValue}
                
                //Cada vez que el usuario escribe, ejecuta la funcion, actualizando el estado del texto
                //(Sino se podria poner solo una letra, y no cadenas).
                onChange={onInputChange} 
            />
        </form>
    );
}

//Cuando el nombre de una funcion empieza con on, significa que estan emitiendo algo.

*/

//Ahora, voy a hacer el mismo programa, pero trayendo una funcion, la cual devolverá el evento a GifExpertApp, para no tener que 
//actualizar las categorias desde esta app.

import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory=({onNuevaCategoria})=>{

    const [inputValue, setInputValue]=useState("");
    
    const onInputChange=({target})=>{
        setInputValue(target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        onNuevaCategoria(inputValue);
        setInputValue("");
    }
    return (
        <form onSubmit={(event)=>onSubmit(event)}>
            <input 
                type="text"
                placeholder="Categoria"
                value={inputValue}
                onChange={onInputChange} 
            />
        </form>
    );
}