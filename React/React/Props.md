Las #props son las propiedades que hereda un componente, de un componente padre. O sea, serían los ==atributos/parametros== que se mandan desde afuera, al momento de la ejecucion del componente. 
Estas propiedades son inmutables, a diferencia de los #estados .

Entonces, ==se mandan== asi:
![[Pasted image 20241224133029.png]]
Como simples parametros dentro de la etiqueta.

Y se ==tratan== asi:
![[Pasted image 20241224133134.png]]

No es para nada complicado. Se cargan como variables. 

### #PropTypes
Es una biblioteca que permite darle un tipo de dato especifico a las propiedades (recordar que js hace lo que quiere), decir si es obligatoria de poner, etc.

Primero hay que ==importarla==:
![[Pasted image 20241224135541.png]]

==Tipos de datos compatibles==:
![[Pasted image 20241224135931.png]]


Despues se escribe el objeto en el cual se especifican las caracteristicas que ==debe cumplir== cada propiedad. Por ejemplo, acá les estoy diciendo que deben ser del tipo string, y que es obligatorio que estén. 
Si esto no llegara a cumplirse, se mostrará un error por la consola.
![[Pasted image 20241224135607.png]]



Despues, hay una funcion que permite cargar ==valores predeterminados== para cada propiedad, en caso de que no se mande nada desde el componente padre.
![[Pasted image 20241224133227.png]]

