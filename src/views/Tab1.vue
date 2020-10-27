<template>
  <PageWrapper name="ホーム">
    <StudentCard></StudentCard>
    <NotificationList></NotificationList>
  </PageWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageWrapper from '@/components/PageWrapper.vue';
import StudentCard from '@/components/StudentCard.vue'
import NotificationList from '@/components/NotificationList.vue'

export default defineComponent({
  name: 'Tab1',
  components: {
    PageWrapper,
    StudentCard,
    NotificationList,
  }
})
</script>