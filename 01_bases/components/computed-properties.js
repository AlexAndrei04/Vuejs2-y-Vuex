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
  template: `
    <div>
      <h2>Computed properties</h2>
      <p>{{ fullname }}</p>
    </div>
  `
});