<template>
  <PageWrapper name="本棚">
    <template #header>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </template>
    <Books></Books>
  </PageWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonToolbar, IonSearchbar } from '@ionic/vue';
import PageWrapper from '@/components/PageWrapper.vue';
// import SearchBar from '@/components/SearchBar.vue';
import Books from '@/components/Books.vue';

export default defineComponent({
  name: 'Tab1',
  components: {
    IonToolbar,
    IonSearchbar,
    PageWrapper,
    Books
  }
})
</script>