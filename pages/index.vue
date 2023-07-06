<template>
  <div>
    <g-carousel :data="carouselData"></g-carousel>
  </div>
</template>

<script setup lang="ts">
import plant_2 from "../assets/img/plant_2.jpg";
import aquarium_1 from "../assets/img/aquarium_1.jpg";
definePageMeta({
  layout: "default",
});
const plant_1 = "../assets/img/plant_1.jpg";

const carouselData = [
  {
    id: 1,
    title: "For The True Plant And Aquarium Lovers",
    subtitle:
      "Transform Your Home into a Lush Oasis: Shop Our Collection for Plant and Aquarium Enthusiasts",
    backgroundImage: plant_1,
  },
  {
    id: 2,
    title: "Quality Plant Care & Accessories",
    subtitle:
      "Nurture Your Greenery with Top-Quality Plant Care and Accessories from Our Shop",
    textColor: "white",
    backgroundImage: plant_2,
  },
  {
    id: 3,
    title: "Benefit Of Indoor Plant And Aquarium",
    subtitle:
      "Bringing Nature Indoors: Discover the Benefits of Plants and Aquariums in Your Home or Office",
    textColor: "white",
    textShadow: " -1px 1px 0 #000",
    backgroundImage: aquarium_1,
  },
];
</script>

<style scoped></style>
