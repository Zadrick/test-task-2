<template lang="pug">
  .brands.d_flex.align_center.justify_center.f_wrap
    .brands__items(v-for="{ img, name } in props.brands")
      .brands__items__card
        .brands__items__card__content
          .brands__items__card__actions
            i.brands__items__card__actions__add-to-cart.c-sor_point(
              v-if="!$store.getters['cart/items'].find(e=> e.img === img && e.name === name )"
              class="fas fa-cart-plus"
              @click="pushToItems({ img, name, quantity: 1 })"
            )
          .brands__items__card__content__img(:src="img" :style="`background: url${img}`")
          .brands__items__card__content__text.d_flex.justify_center.align_center {{name}}

</template>

<script lang="ts">
import { PropType } from 'vue'
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'

import { StateInterface } from '@/store/cart/state'

export interface BrandsTemplate {
  brands: { img: string, name: string }[]
}

@Component({
  props: {
    props: {
      type: Object as PropType<BrandsTemplate>
    }
  }
})
export default class Electronics extends Vue {

  @Getter('cart/items') items!: StateInterface['items']

  @Mutation('cart/PUSH_TO_ITEMS') pushToItems!: any
}
</script>

<style lang="scss" scoped>
.brands__items {
  position: relative;
  margin: 20px;
  z-index: 2;
}

.brands__items__card {
  position: relative;
  background: #000;
  border-radius: 5px;
}

.brands__items__card::before {
  content: '';
  width: 100%;
  height: 100%;
  background: #5500c4;
  transform: skew(5deg);

  position: absolute;
  z-index: -1;
}

.brands__items__card__actions {
  position: absolute;
}

.brands__items__card__content {
  background: #f2f2f2;
  height: 200px;
  width: 200px;
}
.brands__items__card__content__img {
  border-radius: 5px;
  height: 80%;
}

.brands__items__card__content__text {
  position: relative;
  height: 20%;
}

.brands__items__card__actions__add-to-cart {
  position: relative;
  padding: 5px;
  top: -13px;
  left: 184px;
  border-top: 2px solid #210035;
  border-left: 2px solid #210035;
  border-bottom: 2px solid #ff000d;
  border-right: 2px solid #ff000d;
  border-radius: 50%;
  font-size: 15px;

  color: #ff7300;
}
</style>