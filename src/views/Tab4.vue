<template>
  <PageWrapper name="設定">
    <Settings></Settings>
  </PageWrapper>
</template>

<script lang="ts">
import PageWrapper from '@/components/PageWrapper.vue';
import Settings from '@/components/Settings.vue';

export default  {
  name: 'Tab1',
  components: {
    PageWrapper,
    Settings,
  }
}
</script>