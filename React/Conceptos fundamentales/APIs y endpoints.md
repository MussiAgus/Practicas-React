Una #API es un conjunto de ==herramientas, reglas y definiciones== que permiten que dos sistemas se ==comuniquen==. Es como un menu, el cual te dice que funciones estan disponibles.
Ofrecen funcionalidades que pueden integrarse en otro sistema (por ejemplo, devolver el clima).
Ahora, en el caso de una ==API web==, esas funcionalidades estan disponibles a través de URLs, que se invocan a traves de solicitudes HTTP.

Ahora, un #endpoint se trata de una URL dentro de la API, que te lleva a una funcionalidad especifica, o un conjunto de datos. Es como una direccion exacta dentro de la API.

### ==Ejemplo==:

Ponele que tenes una API de superheroes, para obtener datos sobre ellos. La URL base de la API, podría ser esta: https://api.superheroes.com.

Ahora, un posible endpoint podria ser aquel que devuelva info. sobre algun heroe especifico: https://api.superheroes.com/heroes/{id}

O uno en el que, usando una solicitud POST, puedas agregar a uno nuevo: 
https://api.superheroes.com/heroes

Ahora, muchas APIs posiblemente necesiten una key para funcionar correctamente. O sea, necesitas poner un codigo en la URL, que te da el permiso para usar las funciones. Generalmente te piden registrarte para crearte una key. Pero hay otras que son libres. Por ejemplo, esta API te permite obtener imagenes de pixiv, o gelbooru: https://nekosapi.com/

