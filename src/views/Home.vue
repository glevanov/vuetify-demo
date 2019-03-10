<template>
  <span>
    <home-hero></home-hero>
    <home-details></home-details>
  </span>
</template>

<script>
import HomeHero from '@/components/HomeHero.vue';
import HomeDetails from '@/components/HomeDetails.vue';

export default {
  name: 'home',
  components: {
    HomeHero,
    HomeDetails,
  },
};
</script>
