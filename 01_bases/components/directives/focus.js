// No hacer nombres tan genéricos
Vue.directive( 'focus', {
  // El método se va a ejecutar cuando el elemento es insertado al dom, en este caso el input de vmodel.js
  inserted ( el ) {
    el.focus();
  }
});