<template>
  <div id="app">
    <navigation></navigation>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang="sass">
 body 
  background: #000
  color: #fff
  font-family: sans-serif
  font-size: 19px
  .fade-enter-active,
  .fade-leave-active
      transition: .5s
    
  .fade-enter,
  .fade-leave-to
    transform: translateY(10px)
    opacity: 0
</style>
