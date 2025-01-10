
function suma(a,b){
    return a+b;
}

export const MyApp = ({titulo, subtitulo, nombre})=>{

    return (
        <div id="mensajito">
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <p>{nombre}, sos un boludo y no tenes huevos.</p>
        </div>);
}


MyApp.defaultProps={
    titulo: "Te olvidaste el titulo",
    subtitulo: "Te olvidaste el subtitulo?",
    nombre: "capo"
}