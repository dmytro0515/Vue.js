<template>
  <div class="grid grid-cols-3 gap-2">
    <div class="relative pb-book" v-for="item in images" :key="item">
      <img :src="item" class="absolute w-full h-full object-contain">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import book1 from '@/assets/images/book1.jpg'
import book2 from '@/assets/images/book2.jpg'
import book3 from '@/assets/images/book3.jpg'
import book4 from '@/assets/images/book4.jpg'
export default {
  setup() {
    const images = ref([
      book1, book2, book3,
      book4, book1, book2,
      book3, book4, book1,
      book2, book3, book4
    ])
    return {
      images
    }
  }
}
</script>

<style>

</style>