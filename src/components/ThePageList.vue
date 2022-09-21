<script setup lang="ts">
import { usePageStore } from '@/stores/page';

const pageStore = usePageStore();

const pages = pageStore._pages;
</script>

<template>
  <h1>Pages</h1>
  <ul>
    <li class="page" v-for="(page, index) of pages" :key="index">
      <RouterLink :to="page.slug">{{ page.title.rendered }}</RouterLink>
    </li>
    <li class="page">
      <RouterLink to="/about">about (page you add in Vue /view dir)</RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
