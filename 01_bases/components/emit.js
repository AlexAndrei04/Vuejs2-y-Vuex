Vue.component( 'emit', {
  data () {
    return {
      carBrand: 'Volvo'
    }
  },
  template: `
    <div>
      <h2>Emitir eventos con Vuejs 2</h2>
      <p v-on:click="$emit( 'cardbrand', carBrand )">Pulsa aquí para emitir un evento a la instancia <strong>Root</strong> de Vuejs</p>
    </div>
  `
});
