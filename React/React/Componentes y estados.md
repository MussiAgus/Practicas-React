Un #componente, es una parte de la interfaz, la cual es reutilizable. Permiten dividir a la aplicacion en partes mas chiquitas.
Los componentes son funciones. Por eso se los conoce como "functional components". 
![[Pasted image 20241222213954.png]]
Ves? Los componentes pueden formar parte de uno mas grande, y asi. Por ejemplo, "EmployeeListItem" está dentro de "EmployeeList", y hay mas de uno (demotrando que pueden reutilizarse). Estos tienen funciones y caracteristicas. Devuelven elementos JSX (elementos react).

Ahora, los componentes tienen algo llamado #estados. Es la informacion interna que maneja el componente, y puede cambiar con el tiempo. Y las #propiedades son datos que se reciben del exterior, de un componente padre. Estos si que no pueden cambiar.
- El estado es mutable (puede cambiar con eventos, entradas del usuario, etc.).
- Solo afecta el componente donde se define, pero sus cambios pueden influir en componentes hijos.
