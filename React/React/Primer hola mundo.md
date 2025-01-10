![[Pasted image 20241224014034.png]]
Bueno, voy a ==explicar== paso por paso lo que pasa.

*Primero*:
![[Pasted image 20241224014108.png]]
Acá, lo que se esta haciendo, es primero llamar a ==React==, o sea, la biblioteca principal.
Ahora, ==ReactDom== es el encargado de conectar a React con el navegador. O sea, renderiza (dibuja en pantalla) los componentes que pongamos, dentro del HTML.

*Segundo*:
![[Pasted image 20241224014837.png]]
Este componente, que simplemente muestra un texto en h1, podria perfectamente ponerse en un archivo aparte, que se llame como la funcion. Mas adelante muestro el ejemplo.

*Tercero*:
![[Pasted image 20241224015927.png]]
Primero, #document_getElementById busca el elemento dentro del html que tenga el atributo id='mensaje'. Es en este lugar donde react "dibujará" la aplicacion. O sea, usará ese espacio del div como contenedor de la aplicacion.

ReactDOM. #createRoot basicamente sirve para decir que react controlará lo qué este dentro del contenedor que devuelva #document_getElementById .

Por ultimo, #render renderiza los componentes que pongas en ese lugar. Se utiliza #StrictMode para encontrar problemas potenciales y, de ser asi, que muestren un warning en la consola. 

### Si quiero usar el componente como externo...

![[Pasted image 20241224021720.png]]
Creo ==HolaMundoApp.jsx==, el cual simplemente sera la misma funcion App, solo que exportada. Lo que queda hacer en ==main.jsx== es importarla, y usarla como antes.
![[Pasted image 20241224022007.png]]