
## DOM

Son las siglas de Document Object Model ( #DOM). Es, basicamente, una representacion que crea el navegador, leyendo el documento de un HTML.

Es importante aclarar, que por cada html que haya, habrá un documento diferente. Con eso, quiero decir que, si tengo en un mismo servidor varios html, solo tendran un documento cargado aquellos que esten activos en ese momento. Por ese motivo tambien, ==al interactuar con JS== no se puede confundir o mezclar los IDs, ya que simplemente busca en el que este activo en ese momento.
Entonces, si haces clic en un enlace que carga otro archivo HTML, el navegador reemplazará el contenido del DOM con el nuevo archivo, y el objeto document ahora se referirá al nuevo documento cargado.

==Pero, ¿Que representa, y como?==
Agarra cada elemento del html (etiquetas, atributos, textos, etc), y crea un arbol con ellos, mostrando las relaciones jerarquicas que existen. Cada elemento, será un #nodo.
![[Pasted image 20241126004741.png]]


==¿Para que sirve?==
Bueno, con esto y JS (por ejemlplo), podes interactuar con la web. Podes leer interacciones del usuario (por ejemplo, preguntar si apreto cierto boton en el html), extraer informacion del html (si el usuario ingreso algo, podes mandarlo a JS y convertirlo en variable), o activar eventos.

Imaginá que tenes dos archivos. Un html y un JS, enlazados. Si en el html pones:
![[Pasted image 20241126175904.png]]
Y en el JS pones:
![[Pasted image 20241126175917.png]]
Cuando toques el boton en la pagina, se te va a cambiar el texto. 

==¿Que esta pasando?==

Basicamente, pasa lo siguiente:
- Se creo un div, o sea, un espacio que contiene al mensaje "Hola mundo".
- El boton se crea fuera del div. Este es un simple boton, pero tambien tiene un ID.
- Ahora, ya en la parte de JS, lo que se hace es crear dos variables. Estas, usando document.queryselector, guardan el contenido del div (que vendría a ser el mensaje), y el contenido del boton.
- Despues es simplemente una condicion. Si el estado del boton devuelve un click, el contenido de la variable divMensaje cambia, y esto provocara que cambie en el html.

## DOM virtual

El #DOM_virtual es un concepto que inventan bibliotecas como React. Este existe en memoria, y no lo controla el navegador como tal, como si pasa con el DOM. ==¿Cómo funciona?==

- Cuando React cambia un componente, esto se representa en el DOM virtual.
- Usando un algoritmo llamada "Reconciliación", React compara el nuevo DOM virtual, con el anterior.
- Después de identificar los cambios, React ==SOLAMENTE== actualiza las necesarias, en lugar de reescribir TODO el DOM de cero (como se haría normalmente).

![[Pasted image 20241225220256.png]]