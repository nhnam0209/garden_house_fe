<template>
  <nav class="h-full flex bg-white w-full z-10 px-4">
    <div class="navbar-list-items flex flex-1 justify-center items-center px-4">
      <div class="w-full inline-flex">
        <NuxtLink class="p-2 rounded-full text-xl hover:bg-slate-100" to="/"
          >Home</NuxtLink
        >
        <NuxtLink
          class="p-2 ml-4 rounded-full text-xl hover:bg-slate-100"
          to="/about"
          >About Us</NuxtLink
        >
        <div
          class="relative ml-4 text-xl chervon_nav_bar nav_with_sub"
          @mouseover="onMouseHover"
          @mouseleave="onMouseLeave"
        >
          <NuxtLink
            class="inline-flex hover:bg-slate-100 rounded-full p-2"
            to="/products"
            >Shop <span class="flex self-center"><ChervonDownIcon /></span
          ></NuxtLink>
          <SubNavigationBarDesktop
            :class="{ '!block': isHover }"
            class="p-10 w-full fixed top-28 right-0 z-[99] hidden bg-white"
          />
        </div>
        <NuxtLink
          class="p-2 ml-4 rounded-full text-xl hover:bg-slate-100"
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
</template>

<script setup lang="ts">
import { ref } from "vue";

const isHover = ref(false);
const onMouseHover = () => {
  if (!isHover.value) {
    isHover.value = true;
  }
};
const onMouseLeave = () => {
  if (isHover.value) {
    isHover.value = false;
  }
};
</script>

<style lang="scss" scoped>
.icon_style {
  margin-left: 15px;
  cursor: pointer;
}

.chervon_nav_bar:hover svg {
  transform: rotate(180deg);
}
.nav_with_sub:hover::before {
  content: "";
  position: absolute;
  bottom: -50px;
  width: 110px;
  height: 65px;
  left: -23px;
}

.nav_with_sub:hover::after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  position: relative;
  top: -1px;
}
</style>
