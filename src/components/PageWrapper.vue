<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar class="h-16">
          <ion-buttons slot="end" class="text-white text-xl h-10 w-10 bg-white bg-opacity-25 rounded-full inline-flex justify-center mb-2 mr-3">
            <ion-icon :icon="qrCodeOutline"></ion-icon>
          </ion-buttons>
          <ion-title size="large" class="pt-1">{{ name }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="w-full p-4 space-y-4">
        <slot></slot>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonIcon } from '@ionic/vue';
import { qrCodeOutline } from 'ionicons/icons';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageWrapper',
  props: {
    name: {
      type: String,
      default: 'Name',
      require: true
    }
  },
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonIcon
  },
  setup() {
    return {
      qrCodeOutline
    }
  }
})
</script>

<style>

</style>