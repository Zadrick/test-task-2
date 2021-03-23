<template lang="pug">
  header.header
    .header__logo.d_flex.align_center.justify_center
      Navbar(:props="navbar")
      router-link(to="/")#logo
    router-link.header__basket.d_flex.align_center.justify_center(to="/cart")
      .header__basket__item-counter.d_flex.align_center.justify_center {{$store.getters['cart/items'].length}}
      i.fas.fa-shopping-cart.c-sor_point

    
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar, { NavbarProps } from '@/components/Navbar.vue'

@Component({
  components: {
    Navbar
  }
})
export default class Home extends Vue {
  navbar: NavbarProps = {
    links: [
      { text: 'Электроника', to: '/electronics' },
      { text: 'Развлечения', to: '/entertainment' },
      { text: 'Книги', to: '/books' },
    ]
  }
  // mounted() {
  //   console.log(this.$store.getters)
  // }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    padding: 0 10px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    background: #0065fc;
  }

  .header__logo {
    #logo {
      display: block;
      height: 40px;
      width: 40px;
      background-image: url('../assets/logo.png');
      background-size: 100%;

      &:hover {
        transform: rotate(360deg);
        transition: .2s;
      }
    }
  }

  .header__basket {
    text-decoration: none;
    color: #000;
  }

  .header__basket__item-counter {
    margin: -25px -27px 0 auto;
    z-index: 2;
    width: 5px;
    height: 5px;
    padding: 5px;
    border: 1px solid #ff7300;
    border-bottom: 3px solid #2d0057;
    border-left: 3px solid #2d0057;
    border-radius: 50%;
    background: #fff;
  }

  .header__basket i.fa-shopping-cart:hover {
    transform: rotate(-30deg);
    transition: .2s;
  }

</style>