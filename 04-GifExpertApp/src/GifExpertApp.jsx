import { useState } from "react"
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp=()=>{

    const [categorias, setCategorias]=useState(["Dragon ball", "Naruto"]);

    const agregarCategoria=(nuevaCategoria)=>{
        if(nuevaCategoria.lenght<=1) return;
        if(categorias.includes(nuevaCategoria)){
            alert("Categoria ya creada!");
            return;  
        } 
        setCategorias([nuevaCategoria,...categorias]);
    }

    return (
        <>
            <h1>GifApps</h1>
            <AddCategory onNuevaCategoria={(value)=>agregarCategoria(value)}/>
            {categorias.map( (categoria)=> <GifGrid key={categoria} categoria={categoria}/>)}
        </>
    )
}

//Este es por si queres usar la manera de que en el propio hijo se agregue la categoria.
//<AddCategory setCategorias={setCategorias}/>

//Aca le estas mandando la funcion a AddCategory. Esta se procesa ahi, y se carga con el value que el usuario ingrese.
//Este mismo valor cargado (el que estan en (value)) es el que se manda a agregarCategoria, para ampliar el array.s
//<AddCategory onNuevaCategoria={(value)=>agregarCategoria(value)}/>