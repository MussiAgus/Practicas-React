A ver, las pruebas asincronas son algo diferentes a las pruebas de funciones comunes. Aunque a simple vista no deberian dar error, a mi me dio algo como lo siguiente:

![[Pasted image 20241227180352.png]]

Basicamente, lo que te intenta decir, es que ==no estas manejando las tareas asincronas adecuadamente==. Y el tema es que Jest, al momento de entrar en una funcion asincrona (sin tratar), la lee y pasa derecho. Para Jest todas las tareas son sincronas. O sea, no da tiempo a que responda. Entonces, ==Como hacemos para que sepa que hay que esperar?== Hay que avisarle que metodo vamos a utilizar.

### Uso del done:

Generalmente se usa cuando utilizamos *.then* para tareas asincronas. Basicamente, es decirle algo como "hey, espera hasta que tenga una respuesta". Por lo tanto, el done debe ir al final de la funcion que vendria a ser asincrona, para que Jest pare ahi, y espere hasta que reciba una respuesta. Y listo, eso es todo. Algo importante a destacar, es que hay que avisar, justo al lado del nombre de la prueba, que vamos a usar ese metodo.
![[Pasted image 20241228131439.png]]

### Async/await

Bueno, basicamente es lo mismo. Avisas arriba, en el test, que vas a utilizar async, y a la funcion que necesites esperar le pones *await*.
![[Pasted image 20241229092736.png]]

Ahora, puede que no funcione en algun caso, por la version de node. Versiones anteriores tenian problemas con #Jest , al manejar los fetch. Para eso, hay que seguir esta serie de pasos:

- Crear un archivo llamado *jets.config.js*, cuyo contenido será el siguiente: ![[Pasted image 20241229092924.png]]

- Segundo, creas otro archivo llamado *jest.setup.js*, e instalas una dependencia desde la terminal, usando *npm add -D whatwg-fetch*.

- Una vez hecho esto, creas el archivo *jest.setup.js* y escribis ![[Pasted image 20241229093628.png]]

- Listo. Esa era toda la configuracion. Es recomendable hacerla, aunque no tengas el error. Esto, si empezas el proycto con #CRA , no hace falta que lo hagas (es automatico).