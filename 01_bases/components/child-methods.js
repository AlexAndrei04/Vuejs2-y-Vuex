Vue.component( 'child-methods', {
  data () {
    return {
      cmpName: 'Child Methods CMP'
    }
  },
  methods: {
    showCmpName () {
      console.log( "Llamada al método:", this.cmpName );
    }
  },
  template: `
    <div>
      <h2>Acceso a métodos del cmp hijo desde el cmp padre.</h2>
    </div>
  `
});