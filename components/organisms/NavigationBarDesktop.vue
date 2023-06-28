<template>
  <nav class="h-full flex bg-white w-full z-10 px-4">
    <div class="navbar-list-items flex flex-1 justify-center items-center px-4">
      <div class="w-full inline-flex">
        <NuxtLink
          class="navbar-items p-2 rounded-full text-xl hover:bg-slate-100"
          to="/"
          >Home</NuxtLink
        >
        <NuxtLink
          class="navbar-items p-2 ml-4 rounded-full text-xl hover:bg-slate-100"
          to="/about"
          >About Us</NuxtLink
        >
        <NuxtLink
          class="navbar-items p-2 py-4 border ml-4 rounded-full text-xl hover:bg-slate-100 inline-flex chervon_nav_bar nav_with_sub"
          to="/products/aquarium"
          :onmouseover="onMouseHover"
          :onmouseout="onMouseBlur"
          >Shop <span class="flex self-center"><ChervonDownIcon /></span
        ></NuxtLink>
        <NuxtLink
          class="navbar-items p-2 ml-4 rounded-full text-xl hover:bg-slate-100"
          to="/special"
          >Special Offers
        </NuxtLink>
      </div>
    </div>
    <div
      class="bg-no-repeat bg-cover flex-1 bg-center w-full h-full mx-5 my-auto flex justify-center"
    >
      <NuxtLink to="/" class="flex justify-center">
        <img
          src="../../assets/img/logo.png"
          alt="company_logo"
          class="flex self-center w-full max-w-[125px] top-[-3px]"
        />
      </NuxtLink>
    </div>
    <div class="flex flex-1 justify-end items-center">
      <div class="cursor-pointer">
        <SearchIcon />
      </div>
      <div class="icon_style">
        <CartIcon />
      </div>
      <div class="icon_style">
        <UserIcon />
      </div>
    </div>
  </nav>
  <SubNavigationBarDesktop
    class="w-full border"
    v-if="isHover"
    :onmouseover="onMouseHover"
    :onmouseout="onMouseBlur"
  />
  <div>{{ isHover }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isHover = ref(false);
const onMouseHover = () => {
  if (!isHover.value) {
    isHover.value = true;
  }
};
const onMouseBlur = () => {
  if (isHover.value) {
    isHover.value = false;
  }
};
onMounted(() => {});
</script>

<style lang="scss" scoped>
.icon_style {
  margin-left: 15px;
  cursor: pointer;
}

.chervon_nav_bar:hover svg {
  transform: rotate(180deg);
}

.nav_with_sub {
  ::after {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
