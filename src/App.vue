<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <p>Hi</p> -->
  <!-- вставляем компонент -->
  <swarrper/>
</template>

<script>
// так мы импортируем 
 import swarrper from './components/s-warrper.vue';
//  делаем дэфолт и вставляем дете 
export default{
  name:"app",
  components:{
    swarrper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
