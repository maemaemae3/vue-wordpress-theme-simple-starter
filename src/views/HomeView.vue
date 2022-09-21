<script setup lang="ts">
import TheIntroduction from '@/components/TheIntroduction.vue';
import { usePageStore } from '@/stores/page';
import { useCategoryStore } from '@/stores/category';

const pageStore = usePageStore();
const categoryStore = useCategoryStore();

await pageStore.fetchPages();
await categoryStore.fetchCategories();
</script>

<template>
  <main>
    <TheIntroduction />
  </main>
</template>

<style lang="scss" scoped></style>
