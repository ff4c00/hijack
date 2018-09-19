import Vue from 'vue';
import App from './app.vue';
import './style.css';



function component() {

  var element = document.createElement("div"); 
  element.setAttribute("id","app");

  return element;
}

document.body.appendChild(component());


new Vue({
  el: '#app',
  render: h => h(App)
});
