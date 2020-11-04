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
          <ion-title size="large" class="leading-none">{{ name }}</ion-title>
          <ion-buttons slot="primary">
            <ion-button @click="setOpen(true)">
              <ion-icon slot="icon-only" :icon="qrCodeOutline"></ion-icon>
            </ion-button>
            <ion-modal
              :is-open="isOpenRef"
              css-class="my-custom-class"
              @onDidDismiss="setOpen(false)"
            >
            <div>
              <ion-header translucent>
                <ion-toolbar>
                  <ion-title>QRCode</ion-title>
                  <ion-buttons slot="end">
                    <ion-button @click="setOpen(false)">閉じる</ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content fullscreen class="ion-padding">
                <div class="flex justify-center items-center py-20">
                  <img src="@/assets/images/qrcode.png" alt="QRCode" class="w-64">
                </div>
              </ion-content>
            </div>
            </ion-modal>
          </ion-buttons>
        </ion-toolbar>
        <slot name="header"></slot>
      </ion-header>
      <div class="w-full p-4 space-y-4">
        <slot></slot>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonModal, IonButton, IonIcon } from '@ionic/vue';
// import QRCodeModel from '@/components/QRCodeModel.vue'
import { qrCodeOutline } from 'ionicons/icons';
import { defineComponent, ref } from 'vue'

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
    IonButton,
    IonIcon,
    IonModal
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    return { isOpenRef, setOpen, qrCodeOutline }
  }
})
</script>

<style>

</style>