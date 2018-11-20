Vue.component( 'login-form', {
  data () {
    return {
      logged: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.logged = this.user.email === 'test@m.com' && this.user.password === '1234';
    }
  },
  template: `
    <div>
      <h2>Formulario de login</h2>
      <p v-show="logged" style="background: green; color: white">Haz iniciado sesión con los datos: {{ user }}</p>
      <form @submit.prevent="login">
        <input autocomplete="off" name="email" type="email" v-model="user.email" />
        <input name="password" type="password" v-model="user.password" />
        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  `
});
