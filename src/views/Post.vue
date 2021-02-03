<template>
  <div>
    <template v-if="post">
      <div>{{new Date(post.date_gmt).toLocaleDateString()}}</div>
      <h1>{{ post.title.rendered }}</h1>
      <div v-html="post.content.rendered"></div>
    </template>
    <template v-else>Loading...</template>
  </div>
</template>

<script>
import axios from 'axios';
import SETTINGS from '../../settings';

export default {
  data () {
    return {
      post: false
    };
  },

  computed: {

  },

  beforeMount () {
    this.getPost();
  },

  methods: {
    async getPost () {
      const uri = SETTINGS.API_BASE_PATH + 'posts?slug=' + this.$route.params.postSlug;
      const response = await axios.get(uri);
      this.post = response.data[0];
    }
  },
};
</script>
