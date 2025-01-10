Bueno, hasta ahora estuvimos viendo puras etiquetas html, pero hay que recordar, que react se usa para combinar el html, y el js. Entonces, ¿Como puedo hacer para mostrar variables, objetos, funciones, o cosas asi dentro de una etiqueta?

Es tan simple como ponerlo entre ==llaves==. Todo el codigo js que se ponga ahi, será ejecutado. Ya sea una simple suma, una variable, o la ejecucion de una ==funcion==. 

Hablando de funciones, estas pueden ser parte del componente. Eso si, no es recomendable escribirlas dentro del componente, porque sino se estaría recargando en memoria cada vez que el componente se refresque. Podría hacerse asi:

![[Pasted image 20241224121929.png]]

- Como puede verse, la funcion "suma" esta fuera del componente, pero está dentro del mismo archivo.
