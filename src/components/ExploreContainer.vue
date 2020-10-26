<template>
  <div class="w-full p-4 space-y-2">
    <StudentCard></StudentCard>
    <NotificationList></NotificationList>
  </div>
</template>

<script lang="ts">
import StudentCard from './StudentCard.vue'
import NotificationList from './NotificationList.vue'
export default {
  name: 'ExploreContainer',
  props: {
    name: String
  },
  components: {
    StudentCard,
    NotificationList
  }
}
</script>