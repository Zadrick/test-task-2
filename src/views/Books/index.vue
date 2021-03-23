<template lang="pug">
  Template(:props="temlate")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Template, { BrandsTemplate } from '@/components/temlates/Brands.vue'

@Component({
  components: {
    Template
  }
})
export default class Books extends Vue {
  temlate: BrandsTemplate = {
    brands: this.$store.getters['books/brands']
  }
}
</script>