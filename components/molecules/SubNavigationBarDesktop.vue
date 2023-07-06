<template>
  <div class="border min-w-full top-1">
    <div
      v-for="subNavigationItems in subNavigationData"
      :key="subNavigationItems.id"
    >
      <span>{{ subNavigationItems.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const subNavigationData = [
  {
    id: 1,
    title: "Plant",
    data: [
      {
        id: 1,
        title: "Indoor Plant",
      },
      {
        id: 2,
        title: "Outdoor Plant",
      },
      {
        id: 3,
        title: "Fruit Plant",
      },
    ],
  },
  {
    id: 2,
    title: "Aquarium",
    data: [
      {
        id: 1,
        title: "Saltwater Fish",
      },
      {
        id: 2,
        title: "Fresh Water Fish",
      },
      {
        id: 3,
        title: "Aquatic Plant",
      },
    ],
  },
];
</script>

<style scoped></style>
