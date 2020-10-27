<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="relative pb-full">
      <div class="absolute w-full h-full bg-gray-100 rounded-2xl p-4 border dark:bg-black dark:text-gray-300 dark:border-gray-800 bg-opacity-75">
        <div class="flex items-center justify-between">
          <h2>合計</h2>
          <p class="text-xs">出席率</p>
        </div>
        <div class="flex justify-center mt-3 relative">
          <div class="absolute w-full h-full flex justify-center items-center">
            <p>75%</p>
          </div>
          <svg width="91" height="90" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90.5 45C90.5 69.8528 70.3528 90 45.5 90C20.6472 90 0.5 69.8528 0.5 45C0.5 20.1472 20.6472 0 45.5 0C70.3528 0 90.5 20.1472 90.5 45ZM9.5 45C9.5 64.8822 25.6177 81 45.5 81C65.3822 81 81.5 64.8822 81.5 45C81.5 25.1177 65.3822 9 45.5 9C25.6177 9 9.5 25.1177 9.5 45Z" fill="#3672F8" fill-opacity="0.5"/>
            <path d="M45.5 4.5C45.5 2.01472 47.5198 -0.0233163 49.9927 0.224796C57.3055 0.95852 64.3518 3.47536 70.5007 7.58387C77.9009 12.5285 83.6686 19.5566 87.0746 27.7792C90.4805 36.0019 91.3717 45.0499 89.6353 53.7791C87.899 62.5082 83.6132 70.5264 77.3198 76.8198C71.0264 83.1132 63.0082 87.399 54.2791 89.1353C45.5499 90.8717 36.5019 89.9805 28.2792 86.5746C20.0566 83.1686 13.0285 77.4009 8.08387 70.0007C3.97536 63.8518 1.45852 56.8055 0.724796 49.4927C0.476683 47.0198 2.51472 45 5 45C7.48528 45 9.47101 47.0225 9.78087 49.4884C10.4757 55.0181 12.4481 60.3326 15.5671 65.0005C19.5228 70.9207 25.1453 75.5349 31.7234 78.2597C38.3015 80.9844 45.5399 81.6973 52.5233 80.3083C59.5066 78.9192 65.9212 75.4905 70.9558 70.4558C75.9905 65.4212 79.4192 59.0066 80.8083 52.0233C82.1973 45.0399 81.4844 37.8015 78.7597 31.2234C76.0349 24.6453 71.4207 19.0228 65.5005 15.0671C60.8326 11.9481 55.5181 9.97572 49.9884 9.28087C47.5225 8.97101 45.5 6.98528 45.5 4.5Z" fill="#3672F8"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="relative pb-full">
      <div class="absolute w-full h-full bg-gray-100 rounded-2xl p-4 border dark:bg-black dark:text-gray-300 dark:border-gray-800 bg-opacity-75">
        <div class="flex items-center justify-between">
          <h2>月間</h2>
          <p class="text-xs">出席率</p>
        </div>
        <div class="flex justify-center mt-3 relative">
          <div class="absolute w-full h-full flex justify-center items-center">
            <p>83%</p>
          </div>
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 45C90 69.8528 69.8528 90 45 90C20.1472 90 0 69.8528 0 45C0 20.1472 20.1472 0 45 0C69.8528 0 90 20.1472 90 45ZM9 45C9 64.8822 25.1177 81 45 81C64.8822 81 81 64.8822 81 45C81 25.1177 64.8822 9 45 9C25.1177 9 9 25.1177 9 45Z" fill="#FFAB01" fill-opacity="0.5"/>
            <path d="M45 4.5C45 2.01472 47.0198 -0.023327 49.4926 0.224772C57.7528 1.0535 65.6549 4.15562 72.3007 9.2275C80.1434 15.2129 85.8018 23.6097 88.4051 33.1257C91.0084 42.6418 90.4123 52.7496 86.7085 61.8937C83.0048 71.0378 76.3987 78.7113 67.9069 83.7334C59.415 88.7554 49.5081 90.8477 39.7108 89.6881C29.9135 88.5285 20.7687 84.1814 13.6839 77.3157C6.5991 70.45 1.96686 61.4463 0.500106 51.6903C-0.7428 43.4231 0.345669 35.004 3.59883 27.3663C4.57273 25.0798 7.33172 24.2917 9.50958 25.489C11.6875 26.6863 12.4532 29.4152 11.5368 31.7254C9.20162 37.6119 8.45071 44.0375 9.40008 50.3522C10.5735 58.1571 14.2793 65.36 19.9471 70.8525C25.615 76.3451 32.9308 79.8228 40.7687 80.7505C48.6065 81.6781 56.532 80.0044 63.3255 75.9867C70.1189 71.9691 75.4038 65.8302 78.3668 58.515C81.3298 51.1997 81.8067 43.1134 79.7241 35.5006C77.6414 27.8877 73.1147 21.1703 66.8406 16.382C61.7643 12.5079 55.7717 10.0704 49.4884 9.28085C47.0225 8.971 45 6.98528 45 4.5Z" fill="#FFAB01"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 rounded-2xl p-4 border dark:bg-black dark:text-gray-300 dark:border-gray-800 bg-opacity-75">
      <div class="flex items-center justify-between">
        <h2>公欠届</h2>
        <p class="text-xs">外部サイト</p>
      </div>
    </div>
    <div class="bg-gray-100 rounded-2xl p-4 border dark:bg-black dark:text-gray-300 dark:border-gray-800 bg-opacity-75">
      <div class="flex items-center justify-between">
        <h2>欠席連絡</h2>
        <p class="text-xs">外部サイト</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MenuList',
})
</script>

<style>

</style>