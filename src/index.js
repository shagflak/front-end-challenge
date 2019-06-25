import 'Styles/main.scss';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VModal from 'vue-js-modal';
import Vuex from 'vuex';
import AppComponent from 'Components/AppComponent.vue';

Vue.use(Vuelidate);
Vue.use(Vuex);
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

Vue.directive('numericOnly', {
  bind(el) {
    el.addEventListener('keyup', () => {
      let regex = /^[0-9]*$/
      if (!regex.test(el.value)) {
        el.value = el.value.slice(0, -1)
      }
    })
  }
});


const store = new Vuex.Store({
  state:{
    lastNoteAdded: {note: ''}
  },
  getters: {
    getNote: state => {
        return state.lastNoteAdded;
    }
  },
  mutations:{
    addNote(state, payload) {
        state.lastNoteAdded.note = payload
    }
  }
});


new Vue({
  render: createElement => createElement(AppComponent),
  store,
  el: '#app'
});
