A ver, los componentes son funciones. Como toda funcion, generalmente devuelven algo con un return, una vez finalizan. En react esto se traduce como enviar un nodo padre. Ahora, si mi #componente devuelve solo un "Hola mundo", y quiero que también envíe un "Adioos, digo, Aciencia", tengo dos opciones: 
- Usar #div.
- Usar #fragment.

A ver, el uso del div esta bien, y hasta podrias agregarle estilos (ya que se volvera parte del HTML). PERO, hay casos en los que eso mismo es un problema, ya que puede "romper" la estructura que ya tenes hecha.
![[Pasted image 20241224114734.png]]

Para estos casos, se puede usar #fragment . Es, basicamente, pasar todas las etiquetas directamente. Se logra poniendo entre "<> </>" lo que queramos enviar.
![[Pasted image 20241224114635.png]]

