<script setup lang="ts">
import { usePostStore } from '@/stores/post';

const postStore = usePostStore();
await postStore.fetchPosts(5);

const recentPosts = postStore.recentPosts;
</script>

<template>
  <h1>Posts</h1>
  <hr />
  <div class="post" v-for="(post, index) of recentPosts" :key="index">
    <h2>{{ post.title.rendered }}</h2>
    <p>{{ new Date(post.date_utc).toLocaleDateString() }}</p>

    <img
      src="https://raw.githubusercontent.com/maemaemae3/vue-wordpress-theme-simple-starter/main/vue-wordpress-theme-simple-starter.svg"
    />
    <p v-html="post.excerpt.rendered" />
    <RouterLink :to="post.slug">Read More</RouterLink>
  </div>
  <hr />
</template>

<style lang="scss" scoped></style>
