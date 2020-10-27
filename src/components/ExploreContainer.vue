<template>
  <div class="w-full p-4 space-y-2">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExploreContainer',
})
</script>