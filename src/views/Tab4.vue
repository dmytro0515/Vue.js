<template>
  <PageWrapper name="設定">
    <Settings></Settings>
  </PageWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageWrapper from '@/components/PageWrapper.vue';
import Settings from '@/components/Settings.vue';

export default defineComponent({
  name: 'Tab1',
  components: {
    PageWrapper,
    Settings,
  }
})
</script>