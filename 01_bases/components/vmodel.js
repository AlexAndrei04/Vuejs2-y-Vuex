Vue.component( 'vmodel', {
  data () {
    return {
      framework: 'Vuejs 2'
    }
  },
  template: `
    <div>
      <h2>Trabajando con vmodel</h2>
      // Focus es importado de la directiva
      <input v-model="framework" v-focus/>
      <p>El framework escogido es: {{ framework }}</p>
    </div>
  `
});