<template>
  <PageWrapper name="出席確認">
    <MenuList></MenuList>
  </PageWrapper>
</template>

<script lang="ts">
import PageWrapper from '@/components/PageWrapper.vue';
import MenuList from '@/components/MenuList.vue';

export default  {
  name: 'Tab1',
  components: {
    PageWrapper,
    MenuList,
  }
}
</script>