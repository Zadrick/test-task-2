<template lang="pug">
  div
    i(ref="open-navbar" class="fas fa-bars navbar__open c-sor_point" v-show="!visible" @click="visible = true")
    .navbar(ref="navbar" :class="visible? 'navbar_show': 'navbar_hide'")
      i(ref="close-navbar" class="fas fa-times navbar__close c-sor_point" @click="visible = false")
      .navbar__content
        router-link.navbar__content__links(v-for="link in props.links.filter(e=> e.to !== $route.path)" :to="link.to") {{link.text}}
      
</template>

<script lang="ts">
import { PropType } from 'vue'
import { Vue, Component, Watch } from 'vue-property-decorator';

export interface NavbarProps {
  links: { text: string, to: string}[]
}

@Component({
  props: {
    props: {
      type: Object as PropType<NavbarProps>,
      required: true
    }
  }
})
export default class Navbar extends Vue {

  visible = !0

  mounted() {
    const { navbar } = this.$refs

    window.addEventListener('click', e=> {
      if(this.visible && e.target !== navbar && e.target !== this.$refs['open-navbar']) this.visible = false
    })
  }

}
</script>

<style lang="scss" scoped>
  .navbar {
    border-top-right-radius: 20px;
    position: fixed ;
    z-index: 3;
    top: 0;
    min-width: 200px;
    overflow: hidden;
    min-height: 100vh;
    background: #170042;

    border-right: 5px solid #8c00ff;
    border-top: 5px solid #8c00ff;
  }

  .navbar__open {
    color: #fff;

    &:hover {
      transform: rotateY(180deg);
      transition: .2s;
    }
  }

  .navbar__close {
    margin: 5px auto 5px calc(100% - 21px);
    color: #fff;

    &:hover {
      animation-name: shake;
      animation-duration: .2s;
    }
  }

  .navbar__content {
    margin: 20px 0;
  }

  .navbar__content__links {
    display: block;
    text-decoration: none;
    padding: 10px;
    color: #fff;

    &:hover {
      background: #8a00fc;
      color: #000;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
  }

  .navbar_hide {
    animation-name: hide-navbar;
    animation-duration: .5s;
    animation-fill-mode: forwards;
  }

  .navbar_show {
    animation-name: show-navbar;
    animation-duration: .5s;
    animation-fill-mode: forwards;
  }

  @keyframes hide-navbar {
    0% {
      left: 0;
    }

    100% {
      left: -100%;
    } 
  }

  @keyframes show-navbar {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    } 
  }

  @keyframes shake {
    0% {
      transform: rotate(0);
    }

    50% {
      transform: rotate(90deg);
    }

    100% {
      transform: rotate(-90deg);
    }
  }
</style>