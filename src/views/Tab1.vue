<template>
  <PageWrapper name="ホーム">
    <StudentCard></StudentCard>
    <NotificationList></NotificationList>
  </PageWrapper>
</template>

<script lang="ts">
import PageWrapper from '@/components/PageWrapper.vue';
import StudentCard from '@/components/StudentCard.vue'
import NotificationList from '@/components/NotificationList.vue'

export default  {
  name: 'Tab1',
  components: {
    PageWrapper,
    StudentCard,
    NotificationList,
  }
}
</script>