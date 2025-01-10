A ver, algo importante a tener en cuenta, es que al momento de hacer cosas dentro de un componente, todo debe estar creado ya. Por ejemplo:

![[Pasted image 20241225230236.png]]
En este ejemplo, aunque a simple vista puede parecer bien, se está incumpliendo algo importante: ==react necesita crear todo al principio, y de ahí actualizar sus estados.==

O sea, la constante "saludo" se ejecuta unicamente cuando se ejecuta la aplicacion. React no conoce nada de su existencia, hasta que eso pase, y por ende no puedo darle, ni actualizar ningún estado. Si o si es necesario que exista algo para actualizar. 
==Imagina lo siguiente==: En un formulario, tenés lugares en blanco para rellenar (actualizar). Pero si o si para hacerlo, necesitas que ==YA EXISTAN== esos espacios en blanco. React necesita lo mismo.

==¿Como se soluciona?==

Los #Hooks son caracteristicas que te permiten controlar el estado y ciclo de vida dentro de los componentes. Estos solo pueden ==usarse en la parte superior==, ==dentro del componente== y ==fuera de cualquier bucle, condicion o función anidada==.  

Entonces, como se mencionaba antes, el problema principal era que react no sabia que cosas existian. Para esto, existe un ==hook== llamado #useState. Este se utilizara para ==decirle a react que X variable puede tender a cambiar y, aparte, le dará un estado iniciar==. 

Pero no se puede usar así nomas. Hay una ==serie de pasos== a seguir:
- *Antes de todo esto*, hay que importar la función de la librería de react. ![[Pasted image 20241226013831.png]]
- *Primero*, hay que declarar una constante, en la cual se guardará el valor del estado actual.
- *Segundo*, crear una función del estilo *set*NombreConstante, dentro de la cual le haremos los cambios a la constante inicial. ==¿Por qué?== Al usarla, react detectará el cambio, y volverá a renderizar el componente, para mostrar el nuevo estado.
- *Tercero*, igualar este "array" que hicimos, a un #useState , el cual contendrá el valor inicial.

Después de estos pasos, ya nos queda una variable que podemos actualizar sin problemas.

==Ejemplo==:
![[Pasted image 20241226011550.png]]

En este caso, quiero mostrar un simple mensaje, el cual aparecerá despues de apretar un boton. Lee [[Evento CLICK]] si no te acordás de como empezar eventos con uno.

- Entonces, lo primero que hice, fue hacer un array con la constante *"mensaje"*, la cual se cargará con el *" "* que le pasé a través de #useState . 

- *"setMensaje"* es el encargado de avisarle a react si hubo cambios o no. Si eso pasara, le diria a react algo como "El estado cambio y, por consecuencia, tenes que volver a ejecutar la renderizacion del componente".

- La función *"saludo"* simplemente ejecutará *"setMensaje"*, el cual le cargará el nuevo estado a *"mensaje"* y hará que react renderice otra vez esa parte del componente.

==Ejemplo completo, pero ahora con un contador==:
![[Pasted image 20241226014943.png]]