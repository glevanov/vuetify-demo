<template>
  <div>
    <home-plans></home-plans>
    <meal-recipes></meal-recipes>
  </div>
</template>

<script>
import MealRecipes from '@/components/MealRecipes.vue';
import HomePlans from '@/components/HomePlans.vue';

export default {
  name: 'Menu',
  components: {
    HomePlans,
    MealRecipes,
  },
};
</script>

<style scoped>
</style>
