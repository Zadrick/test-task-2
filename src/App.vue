<template lang="pug">
  div
    Header
    .body
      h1 {{$route.name}}
      router-view
    Footer
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Header: ()=> import('@/components/Header.vue'),
    Footer: ()=> import('@/components/Footer.vue')
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss">

@import "./assets/own-classes.scss";

* {
  margin: 0;
  padding: 0;
  font-family: monospace;
}

.body {
  padding: 5px;
  min-height: 100vh;
  background: #08004d;
}
</style>