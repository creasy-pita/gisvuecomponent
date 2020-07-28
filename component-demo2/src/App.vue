<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <alert     
      title="成功提示的文案1111"
      type="warning"
      @close="hello"
      center
      show-icon />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Alert from "./components/alert/src/alert.vue";
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Alert
  },
    methods: {
      hello() {
        alert('Hello World!');
      }
    }  
}
</script>

<style>
@import "./assets/alert.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
