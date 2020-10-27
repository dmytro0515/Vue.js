<template>
  <div class="relative w-full bg-gray-100 shadow-lg rounded-2xl overflow-hidden p-4 border dark:bg-black dark:text-gray-300 dark:border-gray-800 bg-opacity-75">
    <div class="grid grid-cols-6 gap-1">
      <div class="col-span-3 text-xs font-semibold">
        東京デザインテクノロジーセンター専門学校
      </div>
      <div class="col-span-3 text-sm font-semibold flex justify-end items-center space-x-2">
        <p>Student ID</p>
        <img src="@/assets/images/header_logo@2x.png" alt="" class="h-10">
      </div>
      <div class="col-span-2 text-sm font-semibold flex justify-center items-center">
        <img src="@/assets/images/UserImage.png" alt="" class="h-20 rounded-xl">
      </div>
      <div class="col-span-4 text-xs font-semibold flex py-1">
        <div class="w-2/5 px-2 text-right space-y-1">
          <p v-for="text in titles" :key="text">{{ text }}：</p>
        </div>
        <div class="w-3/5 px-2 space-y-1">
          <p v-for="text in studentInfo" :key="text">{{ text }}</p>
        </div>
      </div>
      <div class="col-span-4 text-xs leading-tight tracking-tight">
        <p><span class="font-semibold mr-1">発行日</span>2020.1.1</p>
        <p>〒169-0075 東京都新宿区高田馬場2-11-10</p>
        <p>TEL 03-3209-8222</p>
      </div>
      <div class="col-span-2 text-xs leading-tight text-right">
        <p>上記の者は当校の学生であることを証明する</p>
        <p><span class="font-semibold mr-1">学園長</span>多田順次</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
export default defineComponent({
  setup() {
    const titles = ref<string[]>(['学籍番号', '氏名', '学科', '生年月日'])
    const data = {
      id: '20C1010000',
      name: 'TECH.C.',
      course: 'スーパーIT科',
      birthday: 'YYYY/MM/DD'
    }

    const studentInfo = ref<string[]>(Object.values(data))

    return{
      titles,
      studentInfo
    }
  }
})
</script>

<style>

</style>