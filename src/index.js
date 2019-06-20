import 'Styles/main.scss';
import Vue from 'vue';
import AppComponent from 'Components/AppComponent.vue';

new Vue({
  render: createElement => createElement(AppComponent),
  el: '#app'
});
