// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hell Vue!'
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!',
    counter: 0
  }
})

var app1 = new Vue({
  el: '#app1',
  data: {
    counter: 0,
    fSize: 12
  },
  methods: {
    addOne() {
      this.counter += 1
    }
  }
})