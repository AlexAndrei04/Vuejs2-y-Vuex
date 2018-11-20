Vue.component( 'vmodel-checkboxes', {
  data () {
    return {
      frameworks: []
    }
  },
  template: `
    <div>
      <h2>Vmodel con arrays</h2>
      <input id="vuejs2" type="checkbox" value="Vuejs 2" v-model="frameworks" />
      <label for="vuejs2">Vuejs 2</label>

      <input id="reactjs" type="checkbox" value="Reactjs" v-model="frameworks" />
      <label for="reactjs">Reactjs</label>

      <input id="angular" type="checkbox" value="Angular" v-model="frameworks" />
      <label for="angular">Angular</label>

      <p>Frameworks seleccionados: {{ frameworks }}</p>
    </div>
  `
});