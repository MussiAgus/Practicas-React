Si, se puede exportar alguna funcion x, y probar esta en otro archivo. Por ejemplo, es recomendable tener una estructura como la siguiente:
![[Pasted image 20241226214321.png]]
Si te fijas bien, dentro de la carpeta *test*, hay una que se llama *base-pruebas*, al igual que la que está en *src*. Lo idea seria que la carpeta de pruebas sea igual, o muy parecida, a la de source, con la diferencia de que el segundo archivo, en el que se hará el test, debe contener *test* en su nombre.

==Yendo al grano==
Se puede exportar, por ejemplo, alguna de las funciones que esté dentro del archivo 
*02-template-string.js*, mandarla dentro de *02-template-string.test.js* y hacer las pruebas con jest ahí.
![[Pasted image 20241226230538.png]]
Acá importo la funcion *getSaludo*, la cual recibe un nombre, y devuelve "Hola {nombre}!". Nada mas. Entonces, deberia funcionar si la pruebo con *npm run test*, ¿No? Bueno, no.
![[Pasted image 20241226215710.png]]

Necesitamos [[Babel]]. ¿Por qué? Basicamente, porque escribimos codigo actual, y #Jest no está preparado para analizarlo. ==¿Como se soluciona?==
Hay que instalar babel en el proyecto, usando las indicaciones que da Jest.

Entonces, poner lo siguiente en la terminal: 
- npm install --save-dev babel-jest @babel/core @babel/preset-env

Despues, crear un archivo llamado *babel.config.js*, y poner lo siguiente:
- module.exports = {  
	presets: [ ['@babel/preset-env', {targets: {node: 'current'}}] ],  
};

==NOTA==: Tuve un problema inesperado. Pero cambié dos cosas, y se solucionó. Primero, el archivo *babel.config.js*, lo renombré a *babel.config.cjs*. Segundo, fui a *package.json* y cambie *"type": "modules"* por *"type": "commonjs"*.  Y después de todo eso, si sucedió:
![[Pasted image 20241226231619.png]]

Ahora, hay que tener en cuenta que el test ejecuta tambien el archivo del que estas sacando el import, al momento de ejecutarse. Por lo tanto, si en *02-template-string.js* tenemos varios console.log, o variables que no tienen sentido (por ejemplo) eso también nos dará error.

*==Otro ejemplo==*:
![[Pasted image 20241227005157.png]]