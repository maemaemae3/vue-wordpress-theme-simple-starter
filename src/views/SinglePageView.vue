<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePageStore } from '@/stores/page';
import { useStateStore } from '@/stores/state';
// import NotFound from './NotFound.vue';

const stateStore = useStateStore();
const pageStore = usePageStore();
stateStore.updateIsLoadingState(true);

const route = useRoute();
const slug = route.params.pageSlug as string;
const page = await pageStore.getSinglePage(slug);
stateStore.updateIsLoadingState(false);
</script>

<template>
  <template v-if="page">
    <h1>{{ page.title.rendered }}</h1>
    <div v-html="page.content.rendered"></div>
  </template>
  <!-- <NotFound v-else-if="isNotFound" /> -->
  <template v-else>Loading...</template>
</template>

<style lang="scss" scoped></style>
