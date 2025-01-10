Es un framework que sirve para crear, ejecutar y estructurar pruebas en aplicaciones de JavaScript. Su paginas es: https://jestjs.io/

==Primeros pasos...==
- Antes que nada, hay que instalarlo en nuestra aplicación. Para eso hay que ejecutar 
*npm install --save-dev jest* en la terminal.

- Despues, en el package.json hay que agregar, en la parte de scripts, la siguiente linea: 
*"test": "jest"*. Esto será lo que debemos ejecutar cuando queramos hacer las pruebas.

- Como dato extra, este ultimo paso hara que debamos ejecutar *npm run test* cada vez que hagamos un cambio, y queramos probarlo. Para arreglar esto, vamos a la parte de scripts, en package.json, y agregamos *--watchAll*, y asi estará escuchando todo el rato.

==¿Cómo se usa?==
Basicamente, es poner dentro de una funcion, las partes del codigo que queramos probar.
Seria algo como: 

*test*("*Titulo de la prueba*", ()=>{
	//codigo a probar
})

==Prueba de error:==
![[Pasted image 20241226132641.png]]
A ver, si cero es exactamente igual a cero, #Jest debe lanzar un error, y es exactamente lo que hizo.
![[Pasted image 20241226132736.png]]

==Prueba de true==:
![[Pasted image 20241226132835.png]]
En este caso, nunca entraría al if, por lo que no debe lanzar ningun error.
![[Pasted image 20241226133012.png]]

*Nota: Los errores que da, son por esLint, y no por problemas de funcionamiento.*

### Expect / toBe

Bueno, ponele que no querés usar un if, como en los ejemplos anteriores. Hay mejores formas de hacerlo. Por ejemplo, usando el metodo #expect. Este guarda el valor real de una variable y, a traves de un matcher, lo compara con un valor esperado.

==¿Que es un matcher?== Es un funcion que compara un valor real, con un valor esperado. Existen varios, y cada uno tiene una función diferente. 
##### Mas usados:

#toBe: Compara dos valores usando igualdad estricta (`===`).

#toEqual: Verifica igualdad de valores, incluyendo objetos u arrays.
- *expect({ a: 1 }).toEqual({ a: 1 });* // Pasa

#toBeNull: Verifica que el valor sea null. 
- *expect(null).toBeNull();*

#toBeDefined: Verifica que el valor *NO* sea undefined.
- *expect(4).toBeDefined();* // Pasa

#toBeTruthy y #toBeFalsy: Verifican si un booleano es true or false.
- *expect(true).toBeTruthy();* // Pasa
- *expect(0).toBeFalsy();* // Pasa

#toContain: Comprueba si un elemento está en un array o cadena de texto.
- *expect([1, 2, 3]).toContain(2);* // Pasa
- *expect("Hola mundo").toContain("Hola");* // Pasa


