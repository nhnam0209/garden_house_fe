<template>
  <a-carousel arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div
      v-for="(item, index) in data"
      :key="index"
      :style="{
        backgroundImage: `url(${item.backgroundImage})`,
      }"
      class="h-[544px] highlight_container"
    >
      <div class="flex h-full">
        <div class="flex-col w-2/4 self-center text-left ml-6">
          <h1 class="font-bold text-5xl">{{ item.title }}</h1>
          <p class="text-md mt-2">{{ item.subtitle }}</p>
          <button
            class="py-3 px-5 text-white font-bold bg-primary rounded-md mt-5 hover:bg-secondary"
          >
            Shop Now
          </button>
        </div>
        <img :src="item.backgroundImage" alt="" class="image_style" />
      </div>
    </div>
  </a-carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  props: {
    data: [],
  },
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
  },
});
</script>

<style scoped>
/* .ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  overflow: hidden;
} */

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.image_style {
  background-size: cover;
}
.highlight_container {
  animation-name: fade-in;
  animation-fill-mode: both;
  animation-duration: 2s;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
