<template>
  <v-container>
    <div>{{new Date(post.date_gmt).toLocaleDateString()}}</div>
    <h1>{{ post.title.rendered }}</h1>
    <div v-html="post.content.rendered"></div>
  </v-container>
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  },
};
</script>