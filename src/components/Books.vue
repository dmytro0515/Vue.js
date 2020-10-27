<template>
  <div class="grid grid-cols-3 gap-2">
    <div class="relative border pb-book" v-for="item in 12" :key="item">
      <div class="absolute w-full h-full">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>