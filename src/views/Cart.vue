<template lang="pug">
  .cart.d_flex.f_wrap.justify_center.direction_col(align="center")
    h1(v-if="!items.length") Nothing here
    .basket__items(v-for="(item, index) in items")
      .basket__items__box.d_flex.justify_space-evenly.align_center
        .basket__items__box__image(:style="`backgroud: url(${item.img});`")
        .basket__items__box__title {{item.name}}
        .basket__items__box__controllers
          .basket__items__box__controllers__quantity
            i.basket__items__box__controllers__quantity__add-one.fas.fa-chevron-up.c-sor_point(@click="setItemQuantity({quantity: item.quantity +1, index })")
            input.basket__items__box__controllers__quantity__input(:value="item.quantity" :title="item.quantity" @input="e=> onProductQuantityInput(e, index)")
            i.basket__items__box__controllers__quantity__delete-one.fas.fa-chevron-down.c-sor_point(@click="setItemQuantity({quantity: item.quantity -1, index })")
        i.fas.fa-trash-alt.basket__items__box__controllers__remove-from-cart.c-sor_point(@click="setItems(items.filter(e=> e !== item))")

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Mutation, Getter } from 'vuex-class'
import { StateInterface } from '@/store/cart/state'

@Component({
})
export default class Cart extends Vue {
  @Getter('cart/items') items!: StateInterface['items']

  @Mutation('cart/SET_ITEMS') setItems!: any
  @Mutation('cart/SET_ITEM_QUANTITY') setItemQuantity!: any

  onProductQuantityInput(e: InputEvent, index: number) {
    const val: string = e.target!.value
    e.target!.value = val.replace(val.match('[^0-9]+'), '')
    this.setItemQuantity({quantity: +e.target!.value, index})
  }
}
</script>

<style lang="scss" scoped>
.basket__items__box {
  width: 400px;
  background: #fff;
}

.basket__items__box__image {
  width: 40px;
  height: 40px;
}

.basket__items__box__controllers__quantity {
  i {
      padding: 5px;
      border-radius: 50%;

    &:hover {
      background: #00000077;
    } 
  }
}

.basket__items__box__controllers__quantity__input {
  margin: 5px;
  outline: none;
  border: none;
  width: 20px;
  text-align: center;
}
</style>