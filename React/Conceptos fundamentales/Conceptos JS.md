isBueno, vamos a empezar por lo mas basico.

# TIPS:
Con Fn+F2 sobre una variable, si le cambias el nombre, se cambia en todos lados.
# Variables.

Antes se utilizaba "var". Eso ya es obsoleto! ==NO SE USA MAS==.
#let : Asi es como se crea una variable, cuyo valor ==PUEDE== ser modificado a lo largo del programa.

#const: Con esto se crean variables cuyo valor ==NO PUEDE== ser modificado.

#backtiks: Es una forma de mostrar y concatenar texto con variables. Ya no se pone el texto entre comillas dobles, sino que se pone entre ==backtiks==, y cuando dentro de la cadena quieras que en ese lugar aparezca el contenido de una variable, simplemente pones ==${nombre-variable}==. Tambien es sensible a los saltos de linea (enter) que pongas dentro de las backtiks.

#scope: Es el =="area"== dentro de la cual cada variable funciona. Pongamos un ejemplo:

![[Pasted image 20241128223811.png]]

Fijate, hay algo raro, ¿No? La constante "nombre", está creada dos veces. Y sin embargo, no hay ningun error. ¿Por qué? ==Aparte== ¿Por que "numero" no marca error en el for, pero si fuera de el? 

La respuesta es el #scope. La variable "nombre" que está dentro del for, funcionará solamente dentro del for. Es el area donde opera. Lo mismo pasa con "numero". Si intentaras leer "numero" fuera del for, te daria error, alegando que no existe ninguna variable "numero" definida.

# Objetos literales (diccionarios) y arrays

### Objetos literales

Los #diccionarios u objetos literales, son aquellos que tienen una clave, y seguido el contenido. Trabajan con pares de valores, del estilo *nombre: "Agus"*. A diferencia de los objetos comunes, estos no necesitan una clase o constructor.  Por ejemplo:
![[Pasted image 20241129012712.png]]

- Se usan cuando no se necesita reutilizar la estructura en otro lugar.
- Cuando necesites definir algo especifico en el momento.

Ahora, ponele que tenes uno de estos objetos, y queres hacer una copia, para cambiarle algunos valores.
![[Pasted image 20241129005748.png]]

Lo lógico seria hacer:
![[Pasted image 20241129012922.png]]
O sea, igualar el nuevo, y despues cambiar alguna de las claves de este, ¿No? ==Bueno, no.==
Acá pasa algo parecido a C. Con eso, le estas diciendo que "persona2" ==tendra la misma direccion en memoria== que "persona", por lo que cualquier cambio que hagas, tambien va a aparecer en "persona" (logico, ya que son la misma cosa).
Y ¿Como carajo se soluciona esto, si quiero un nuevo objeto con las ==mismas claves y contenidos==, pero que sea modificable y que no afecte al primero? La respuesta...

### Operador #spread

Este operador, tiene la forma de =="..."==, si, tres puntos. 
==¿Que hace?== Esta cosa maravillosa, permite descomponer cosas, o sea, las separa parte por parte.
==¿Que cosas?== Objetos, arrays u otras estructuras.
==¿Como funciona?== Copia el objeto en cuestion, y lo separa en sus partes (cada indice en un array, o cada clave en un objeto).

##### ==Un ejemplo con objetos:== 
![[Pasted image 20241129015219.png]]
Y quiero copiar esto, y ponerle los datos del Dark Souls 2:
![[Pasted image 20241129020030.png]]

Listo. Primero copié cada parte de la estructura, dentro de "juego2", ya no estoy copiando la direccion de memoria, como antes. Y despues simplemente agarre cada parte por separado, y la modifiqué. El resultado; ![[Pasted image 20241129020419.png]]

==Nota==: Poniendo console.table podes ver las cosas en forma de tabla.

Imaginá las posibilidades de esto podrias agarrar, copiar todo el contenido de un objeto, y pegarlo en la mitad de otro, el cual tendra mas cosas, por ejemplo.

##### ==Un ejemplo con arrays==
![[Pasted image 20241129021346.png]]

¿Cual deberia ser el resultado? Lo pegue a la mitad del array. Antes, si hubieramos hecho esto, lo hubiera tomado como un array, dentro de un array, de este modo:
![[Pasted image 20241129021621.png]]

Pero si lo ponemos con el #spread ...
![[Pasted image 20241129021709.png]]

Todo queda dentro de un mismo array, ya que copia elemento por elemento y lo pone en su respectivo lugar.

### Array

==Funcion map:== Lo que hace, es crear un nuevo array, a partir de los resultados de pasar ==cada== elemento del array original, a traves de una funcion.
![[Pasted image 20241129025403.png]]
Aca quise hacer algo divertido. Cada numero tiene como exponente al anterior. Entonces, basicamente, cada elemento del array "numerosParaExponente" se cargara en "numero" y pasará por esta funcion. 

# Desestructuracion de objetos

La #Desestructuracion, o "asignacion desestructurante", se trata de extraer determinada propiedad, con su contenido, de un objeto o array. Con el fin de poder utilizar directamente una variable "x", y no tener que invocar cada vez al objeto. 
==¿Como se hace esto?==

Bueno, si tuvieras este objeto:
![[Pasted image 20241129204900.png]]
Y quisieras extraer el nombre y la edad, sería tan facil como hacer:
![[Pasted image 20241129204941.png]]
"nombre" y "edad" perfectamente podrian tener otros nombres, y son los que se usarán a lo largo del codigo. Y el =="="== es para decir de que objeto deben extraerse las propiedades.

![[Pasted image 20241129205102.png]]
¿Ves? Se les puede asignar el nombre que quieras. 
![[Pasted image 20241129205920.png]]

==Pasando a funciones...==
Los podes usar en funciones tambien. Directamente podrias mandar el objeto, y extraer desde los parametros lo que necesites. Mirá:
![[Pasted image 20241129210223.png]]
Directamente le mandas el objeto ("persona" en este caso), y lo desestructuras en la parte de parametros.

==Caso mas armado==:
![[Pasted image 20241129213159.png]]
- A ver, la funcion use_Context, ==extraera== los parametros de nombre y edad del objeto que se le pase, y ==retornara== un objeto nuevo, el cual tendra "nombreSujeto" (igual al nombre extraido), y "edadSujeto" (lo mismo que antes).

- Al terminar, todo se guarda en la constante "avenger", y despues de esta se extrae el contenido de lo retornado. Esto como tal, funciona, pero podria mejorarse aun mas.
![[Pasted image 20241129213552.png]]
==¿Que hice?== Basicamente borré "avenger" y ahora directamente extraigo las propiedades de lo que retorne la funcion "use_Context".

# Desestructuracion de arrays

A ver, el concepto es parecido al de los objetos solo que, como se trata de arrays, cambiamos los =="{}"== por =="[]"==. 

![[Pasted image 20241129220503.png]]
Listo, asi se extrae el primer indice del array. Ahora... ==¿Que pasa si quiero extraer otro lugar?==
Bueno, hay que que poner tantas comas, como lugares quiera saltar.
![[Pasted image 20241129220926.png]]
¿Ves? Los espacios en los que estarian los objetos salteados, se quedan vacios.

Ahora, no te quedes solo con esto. Recorda que en un array, podemos hacer que uno de los indices sea una funcion. 
![[Pasted image 20241129221846.png]]
![[Pasted image 20241129222003.png]]

- El indice 1 corresponde a una funcion que devuelve "Hola mundo". Y al extraer esa funcion, podemos utilizarla.
# Import, export

#import - #export

Basicamente, poder usar objetos o funciones de un archivo, en otro. 
Primero, para poder importar algo, hay que exportarlo. Entonces si queremos, por ejemplo, exportar un objeto, deberiamos hacer...
![[Pasted image 20241129225922.png]]
Tambien hay otras formas, como directamente hacer: ![[Pasted image 20241129230004.png]]
una vez que hayas terminado de escribir el objeto.
Bueno, ya tenemos eso exportado. Ahora hay que recibir ese objeto. Para eso, simplemente vamos al archivo en el que lo vayamos a usar, y ponemos:

*Import {} from " "* 

Dentro de las llaves, irá el nombre del objeto correspondiente, y entre las comillas la ruta
( #path ) correspondiente.
![[Pasted image 20241130160159.png]]

### Otras formas de exportar:

#### ==Podes mandar varias funciones a la vez.==

==Asi lo exportas:==
![[Pasted image 20241130161649.png]]

==Asi lo importas:==
![[Pasted image 20241130161732.png]]
Tene en cuenta que, de esta forma, estas exportando un objeto, el cual contiene las dos funciones. Por esta razon, al importarlo y querer usarlo, primero vas a tener que nombrar al objeto, y despues el nombre de la funcion.


#### ==Podes exportarlas por separado, y recibirlas a la vez.==

==Asi lo exportas:==
![[Pasted image 20241130161830.png]]

==Asi lo importas:==
![[Pasted image 20241130161843.png]]

#### ==Podes importar solo una cosa (export default).==

==Exportar:==
![[Pasted image 20241130162021.png]]

==Importar:==
![[Pasted image 20241130162407.png]]

#### ==Podes usar los dos metodos a la vez.==

==Exportar:==
![[Pasted image 20241130162629.png]]
![[Pasted image 20241130162448.png]]

==Importar:==
![[Pasted image 20241130162606.png]]

#### Algo muy importante:
Cuando vas a exportar algo, al momento de ejecutar el programa, tambien se ejecuta el contenido de los archivos importados. ==Explicacion:==

Yo tenia este programa:
![[Pasted image 20241201021942.png]]
del cual queria extraer las dos funciones, y ejecutarlas en este programa:
![[Pasted image 20241201022022.png]]

==¿Y qué pasó?==
El resultado fue esto:
![[Pasted image 20241201022117.png]]
Los primeros dos renglones no deberian estar. Despues de fijarme, vi que en el primer programa, puse dos console.log.

==Conclusion:== Tener cuidado con las cosas que hay en un archivo que vas a exportar despues. Recordar que todo se ejecuta. Si son funciones, no hay problema, ya que necesitan ser invocadas para funcionar. Pero si hay console.log o invocaciones dentro del mismo codigo, ahi si se te va a complicar.
# Funciones de arrays

#find: Basicamente, te devuelve el contenido de la posicion dentro de un array, que cumpla con la condicion especificada. ==Por ejemplo...==
![[Pasted image 20241201014548.png]]
Acá podés ver que esta funcion, recibe un parametro id, y retorna del vector "heroe", el contenido de la posicion que cumpla con tener el id igual al enviado por parametro.

#filter: Este forma un nuevo array con todos los resultados de un array original, que cumplan cierta condicion. ==Por ejemplo...==
![[Pasted image 20241201014753.png]]
Se envia por parametro algo como "DC" (nombre de la empresa), y se devolvera la lista (un array) de los heroes pertenecientes a esa compañía.

# Promesas

Las #Promise permiten manejar funciones que son asincronicas. O sea, que no se ejecutan de manera lineal. Representan un valor que estará disponible ahora, despues, o nunca. ==Puede tener 3 estados:==
- Pendiente (todavia no finalizo el proceso).
- Resuelta.
- Rechazada.

Para crear una, debe usarse el constructor #Promise , el cual recibirá una funcion callback con dos parametros: 
- ==resolve==: En caso de que se cumpla.
- ==reject==: En caso de que no se cumpla.

Ahora, ponele que ya hiciste toda la funcion. Ahora, ==¿Cómo se usa?==
Facil. Con ==.then==, ==.catch== y ==.finally== 

Entonces, dentro de la promesa, debes invocar ==resolve()== para enviar el resultado de la promesa. O usar ==reject()== para lo mismo, pero en el caso de que no se haya cumplido.
Lo que envies aca adentro, pueden ser mensajes, variables, objetos, lo que quieras.

Esto que envian resolve y reject, es agarrado por .then (en el caso de resolve) y por .catch (en el caso de reject). Ahora, hay que entender que .then, .catch y .finally toman una callback como parametro. Y el parametro de esa callback, será lo que se envie desde la promise.

Tambien existen cadenas de promesas. O sea, que el resolve de la primer promesa, sera la siguiente promesa a tratar. En el siguiente apartado (FETCH) se verá un mejor ejemplo.
##### Algo para entender el próximo ejemplo:

La funcion #setTimeout recibe dos parametros. Primero la funcion que debe ejecutar, y segundo la cantidad de tiempo (en milisegundos) que debe esperar para ejecutarla. De modo que si pones una funcion para saludar, y en el segundo parametro pones 5000, va a tardar 5 segundos en contestar.

##### Ejemplo:
![[Pasted image 20241201035652.png]]
![[Pasted image 20241201040142.png]]

Mirá. Cree la #Promise "promesa", la cual despues de dos segundos, utilizara la funcion "getHeroById".
Si ==hero == undefined==: 
	Querrá decir que no encontro el ID del heroe en el array. La promesa será rechazada y se pasará a la parte de .catch dentro del codigo de abajo. Ahi se puede manejar el error y en este caso, mostrará el mensaje puesto en el console.log

Si ==hero != undefined==:
	Entonces existe ese ID, por lo que la constante "hero" se carga, y se envia a .then y esta muestra a hero.

# Fetch

Bueno, hay mucho que aprender, y entender!

El #fetch permite hacer peticiones a una API, usando los endpoints. Podes, para esto, usar diferentes acciones. La mas comun, y si no indicas ninguna, es GET.

Fetch ==devuelve una promesa== esto es importante, ya que vas a tener que tratarla con .this, o en su defecto con Async/await. Generalmente lo que se espera, es que el resultado de esta promesa sea un objeto con toda la informacion. Por ejemplo, si usamos la API que nombré en [[APIs y endpoints]], el resolve deberia devolver un objeto con los datos de una imagen, o un array de estos.

==Voy a mostrar un ejemplo, y explicar paso a paso:==
![[Pasted image 20241202002331.png]]

- Primero, pongo el #fetch, con su respectivo endpoint a la API.

- Ahora, recordá que el fetch es como una promesa. Por lo tanto si escribimos eso, es como declarar una. Y de una promesa siempre esperamos un resolve, o un rejected. Eso debe tratarse con funciones asincronas. El fetch ya es su propia funcion en si, por lo que podemos hacer esto, y tratarla directamente despues con el .then.

- ¿Viste que tenes que poner el nombrePromesa.then? Bueno, podes poner el nombre, y dando un salto de linea seguir con los .then, como es el caso. Hacer eso, y esto: ![[Pasted image 20241202003051.png]] es exactamente lo mismo a cuando poniamos promesa.then( (hero)=>{} ) y toda la bola.

- Ahora, ¿De donde sale el segundo .then que le sigue abajo? ¿Con cual promesa trabaja, si a la primera ya la tratamos con el primer .them? Bueno, a esto se le llama #promesas_encadenadas. En una cadena de promesas, el resultado de la primera, pasa al siguiente then.  Si todo estuviera en la misma linea del editor, verias que todas se estan tocando con los puntos.

- Volviendo al tema. Una vez que el fetch trae el resultado del endpoint, el primer then lo toma, le pone el nombre "res" y con la funcion res.json(), lo vuelve un archivo json. Esto hará que sea mucho mas facil manipularlo, y extraerle la informacion. Es importante destacar que este then, actua como una nueva promesa en si.

- Una vez que el primer then se cumple, el segundo toma el resolve del primer then (antes llamado "res"), le pone el nombre de "data" y muestra finalmente el objeto, el cual vendria a ser este: 
- ![[Pasted image 20241202010732.png]]

Listo! Ya se terminó lo mas grande. Con este objeto, ya podemos hacer lo que queramos. Por ejemplo, si te fijas, por ahi contiene la url de la imagen. Podriamos no solo extraerla del json, sino ademas mostrarla directamente en la pantalla.

![[Pasted image 20241202011820.png]]

==Voy a explicar que hace cada cosa.==

Bueno "data" es el objeto que devolvio el fetch, ya convertido en un json. Ahora, si queremos mostrar la imagen por pantalla, primero necesitamos la url de esta. Si te fijas arriba, el camino seria este: dentro de data, deberias entrar al apartado de items, el cual es un array, y que en cada indice contendrá los datos de una imagen diferente (entre ellos la url de la imagen, que es lo que queremos).

- Entonces la ruta vendria a ser ==data=>items[0]=>image.url== Bueno, eso se guarda en la constante url.

¿Por que items tiene indice cero, y un signo de interrogacion? Bueno, es como la forma de decir que no sabes cual de todos esos será (ya que, en este caso, estamos trabajando con algo random).

Ahora, ¿Que es #document_createElement?
Es un método de JavaScript que se usa para crear un nuevo elemento HTML dinámicamente. No se agrega automáticamente al DOM; solo crea el elemento en memoria.
Podes crear imagenes, videos o cualquier elemento que podrias encontrar en un html. 
Cada uno de estos elementos, tendrá propiedades. Por ejemplo, justo despues de crear el elemento, le asigné un source, o src.

==¿Y para que sirve append?==
El método `append` se usa para agregar un elemento o contenido al final del contenido de un nodo HTML.  

==Y el resultado es...==
![[Pasted image 20241202015424.png]]

