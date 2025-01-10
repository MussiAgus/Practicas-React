En JS, es un evento que se dispara al momento de hacer click en un boton, link o cualquier cosa. 

Ahora, vamos a profundizar un poco. ==¿Como se manejan este tipo de eventos?==

Se manejan con una etiqueta llamada #onClick. Basicamente, podemos configurar el componente, de tal manera que se inicie una funcion, o una serie de funciones, al momento de hacer click en algo.
![[Pasted image 20241225210025.png]]

Entonces, dentro de la creacion del botón uno de sus atributos será el #onClick , y cuando este se active, ejecutará lo que esté dentro de las llaves. En este caso, la función "sumar" (que basicamente aumenta el numero que muestre el boton en el momento), el cual actualizará el #DOM_virtual.






Ahora, algo importante,     i love  you



No se puede invocar a una funcion en el onClick, pasandole tambien un parametro. Porque de este modo, se ejecuta sin esperar el click. 











#useState se usa siempre dentro de componetes react. O sea, tiene sentido, ya que es lo que actualiza al componente, cada vez que este cambia sus #estados.
