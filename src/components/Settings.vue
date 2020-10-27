<template>
  <ion-list>
    <ion-item v-for="item in settingList" :key="item.value">
      <ion-label>{{ item.name }}</ion-label>
      <ion-toggle slot="end" :name="item.value" checked></ion-toggle>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue';
import { IonList, IonItem, IonLabel, IonToggle } from '@ionic/vue';

interface Settings {
  name: string;
  value: string;
}

export default defineComponent({
  name: 'NotificationList',
  components: { IonList, IonItem, IonLabel, IonToggle },
  setup() {
    const settingList = ref<Settings[]>([
      {
        name: '通知',
        value: 'setting-1'
      },
      {
        name: 'Face ID',
        value: 'setting-2'
      },
      {
        name: 'Setting 3',
        value: 'setting-3'
      },
      {
        name: 'Setting 4',
        value: 'setting-4'
      },
    ])

    return {
      settingList
    }
  }
})
</script>

<style>

</style>