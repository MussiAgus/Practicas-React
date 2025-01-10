## ¿Que es?

A ver, React es una biblioteca de Javascript. Lo que hace, es combinar el html, con el css y javascript, para que puedas usar todo a la vez. Por ejemplo, la variable "h1Tag" guarda en su interior una etiqueta de HTML! Cosa que en el JS normal, no se podría hacer ni a palos.

![[Pasted image 20241125184844.png]]

Bueno, es una biblioteca, y NO se descarga. Se invoca dentro del html, poniendo lo siguiente dentro del head, justo arriba del title:
	<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
	<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
	<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

O creando el proyecto directamente, usando #CRA o #Vite .
Los archivos en donde se usen react, tendrán la extensión #jsx.



