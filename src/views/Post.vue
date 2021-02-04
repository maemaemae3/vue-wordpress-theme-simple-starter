<template>
  <div>
    <template v-if="post">
      <div>{{new Date(post.date_gmt).toLocaleDateString()}}</div>
      <h1>{{ post.title.rendered }}</h1>
      <div v-html="post.content.rendered"></div>
    </template>
    <NotFound v-else-if="isNotFound" />
    <template v-else>Loading...</template>
  </div>
</template>

<script>
import axios from 'axios';
import SETTINGS from '../../settings';
import NotFound from '@/components/NotFound.vue';

export default {
  components: {
    NotFound,
  },

  data () {
    return {
      post: null,
      isNotFound: false,
    };
  },

  metaInfo () {
    return {
      title: this.post ? `${this.post.title.rendered} | ${this.post.site_title}` : '',
    }
  },

  beforeMount () {
    this.getPost();
  },

  methods: {
    async getPost () {
      const uri = SETTINGS.API_BASE_PATH + 'posts?slug=' + this.$route.params.postSlug;
      const response = await axios.get(uri);
      if (!response.data.length) { this.isNotFound = true; }
      this.post = response.data[0];
    }
  },
};
</script>
