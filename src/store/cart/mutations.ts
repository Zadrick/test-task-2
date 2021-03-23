import { SET_ITEMS, PUSH_TO_ITEMS, SET_ITEM_QUANTITY } from './mutations-types'
import { StateInterface } from './state'

export default {
  [SET_ITEMS](state: StateInterface, items: StateInterface['items']) {
    state.items = items
  },
  [PUSH_TO_ITEMS]({ items }: StateInterface, item: StateInterface['items'][0]) {
    items.push(item)
  },
  [SET_ITEM_QUANTITY]({ items }: StateInterface, { quantity, index}: { quantity: number, index: number }) {
    if(quantity) items[index].quantity = quantity
  }
}