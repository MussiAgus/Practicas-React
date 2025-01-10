
const divMensaje = document.querySelector('#mensaje');
const boton = document.querySelector('#cambiarTexto');


boton.addEventListener('click', () => {
  divMensaje.textContent = '¡Texto cambiado dinámicamente!';
});