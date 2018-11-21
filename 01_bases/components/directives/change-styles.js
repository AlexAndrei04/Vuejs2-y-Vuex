Vue.directive( 'change-styles', ( el, binding ) => {
  el.style.backgroundColor = binding.value.bgc;
  el.style.color = binding.value.c;
});
