<template>
  <v-container>
    <h1>{{ page.title.rendered }}</h1>
    <div v-html="page.content.rendered"></div>
  </v-container>
</template>

<script>
export default {
  props: {
    page: {
      type: Object
    }
  },
};
</script>