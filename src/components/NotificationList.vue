<template>
  <ion-list>
    <ion-list-header class="text-base text-gray-700 dark:text-gray-400">
      お知らせ
    </ion-list-header>
    <!-- Default Item -->
    <ion-item v-for="(item, n) in notifications" :key="n">
      <ion-label class="py-2">
        <h2>{{ item.title }}</h2>
        <p>{{ item.content }}</p>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue';
import { IonList, IonItem, IonLabel, IonListHeader } from '@ionic/vue';

interface Book {
  title: string;
  content: string;
}

export default defineComponent({
  name: 'NotificationList',
  components: { IonList, IonItem, IonLabel, IonListHeader },
  setup() {
    const notifications = ref<Book[]>([
      {
        title: 'Matched Geometry Effect',
        content: 'Learn how to quickly transition different views'
      },
      {
        title: 'Matched Geometry Effect',
        content: 'Learn how to quickly transition different views'
      },
      {
        title: 'Matched Geometry Effect',
        content: 'Learn how to quickly transition different views'
      },
      {
        title: 'Matched Geometry Effect',
        content: 'Learn how to quickly transition different views'
      },
    ])

    return {
      notifications
    }
  }
})
</script>

<style>

</style>