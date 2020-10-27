<template>
  <PageWrapper name="本棚">
    <SearchBar></SearchBar>
    <Books></Books>
  </PageWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageWrapper from '@/components/PageWrapper.vue';
import SearchBar from '@/components/SearchBar.vue';
import Books from '@/components/Books.vue';

export default defineComponent({
  name: 'Tab1',
  components: {
    PageWrapper,
    SearchBar,
    Books
  }
})
</script>