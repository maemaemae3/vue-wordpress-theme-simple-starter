<script setup lang="ts">
import { useMeta } from 'vue-meta';
import { getPost } from '@/composables/api/post';
import NotFound from '@/components/NotFound.vue';
import { useStateStore } from '@/stores/state';

const stateStore = useStateStore();
stateStore.updateIsLoadingState(true);
const post = await getPost();
stateStore.updateIsLoadingState(false);

useMeta({
  title: post.title.rendered,
});
</script>

<template>
  <template v-if="post">
    <h1>{{ post.title.rendered }}</h1>
    <div>{{ new Date(post.date_gmt).toLocaleDateString() }}</div>
    <div v-html="post.content.rendered"></div>
  </template>
  <NotFound v-else-if="post === null" />
  <template v-else>Loading...</template>
</template>

<style lang="scss" scoped></style>
