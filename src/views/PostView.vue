<script setup lang="ts">
import { getPost } from '@/composables/api/post';
import { useStateStore } from '@/stores/state';
// import NotFound from './NotFound.vue';

const stateStore = useStateStore();
stateStore.updateIsLoadingState(true);
const post = await getPost();
stateStore.updateIsLoadingState(false);
</script>

<template>
  <template v-if="post">
    <h1>{{ post.title.rendered }}</h1>
    <div>{{ new Date(post.date_gmt).toLocaleDateString() }}</div>
    <div v-html="post.content.rendered"></div>
  </template>
  <!-- <NotFound v-else-if="isNotFound" /> -->
  <template v-else>Loading...</template>
</template>

<style lang="scss" scoped></style>
