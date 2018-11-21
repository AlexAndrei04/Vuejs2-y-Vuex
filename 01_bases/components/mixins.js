let myMixin = {
  mounted() {
    console.log( "Mixin init");
    console.log( this.mixinData);
    this.test();
  },
  data () {
    return {
      mixinData:'Mixin Data'
    }
  },
  methods: {
    test() {
      console.log( 'Test from Mixin' );
    }
  }
}

Vue.component( 'mixins', {
  mixins: [myMixin],
  mounted() {
    console.log( 'Mounted from component with mixins' );
    
  },
  data () {
    return {
      mixinData:'Mixin Data desde el componente'
    }
  },
  template: `
    <div>
      <h2>Uso de mixins</h2>
      <p>{{ mixinData }}</p>
    </div>
  `
});