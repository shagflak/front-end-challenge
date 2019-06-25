import 'Styles/main.scss';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VModal from 'vue-js-modal'
import AppComponent from 'Components/AppComponent.vue';

Vue.use(Vuelidate);
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


new Vue({
  render: createElement => createElement(AppComponent),
  el: '#app'
});
