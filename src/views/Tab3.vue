<template>
  <PageWrapper name="本棚">
    <SearchBar></SearchBar>
    <Books></Books>
  </PageWrapper>
</template>

<script lang="ts">
import PageWrapper from '@/components/PageWrapper.vue';
import SearchBar from '@/components/SearchBar.vue';
import Books from '@/components/Books.vue';

export default  {
  name: 'Tab1',
  components: {
    PageWrapper,
    SearchBar,
    Books
  }
}
</script>