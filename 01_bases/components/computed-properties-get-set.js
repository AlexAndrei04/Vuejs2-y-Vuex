Vue.component( 'computed-get-set', {
  data () {
    return {
      amount: 0
    }
  },
  computed: {
    amountFormatter: {
      get () {
        return `${ this.amount }€`;
      }, 
      set ( newvalue ) {
        this.amount = newvalue;
      }
    }
  },
  template: `
    <div>
      <h2>Computed properties get & set</h2>
      <input v-model="amount" />
      <p>{{ amountFormatter }}</p>
    </div>
  `
});