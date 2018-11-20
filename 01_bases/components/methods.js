Vue.component( 'computed', {
  data () {
    return {
      name: 'Alex',
      lastname: 'Andrei'
    }
  },
  computed: {
    fullname () {
      return `${ this.name } ${ this.lastname }`;
    }
  },
  methods: {
    hello () {
      alert( this.fullname );
    }
  },
  template: `
    <div>
      <h2>Computed properties</h2>
      <p v-on:click="hello">Pulsa aquí para ejecutar el método hello</p>
    </div>
  `
});