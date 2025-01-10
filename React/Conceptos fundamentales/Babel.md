Babel, relacionandolo con la historia biblica, vendria a ser algo como un traductor. Por ejemplo, imagina que salio una nueva version de JS, y usas las nuevas funcionalidades.
¿Pensas que todos los navegadores tendrán compatibilidad con la nueva version? Posiblemente no. 

==Entonces...¿Que hace?==

Babel agarra tu codigo, y lo "traduce" a un JavaScript que cualquier navegador pueda interpretar.

![[Pasted image 20241126185746.png]]

==¿Como usarlo?==

Bueno, esta parte es algo mas complicada. Hay dos metodos:

**La facil**, seria incluirlo con un enlace en el head del html.
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

El tema es que esta forma no es eficiente para proyectos reales, ya que lo carga todo en vivo, y cada vez que recargue la pagina el usuario, lo volvera a hacer.

**La dificil** sería descargarlo con npm y node.js y ahi lo tendrias que configurar. De esa manera, la compilacion se haria una sola vez.
https://www.youtube.com/watch?v=EU53Lg-DSVM
