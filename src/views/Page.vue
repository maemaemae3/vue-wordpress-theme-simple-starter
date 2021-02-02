<template>
  <div>
    <template v-if="pageContent">
      <h1>{{ pageContent.title.rendered }}</h1>
      <div v-html="pageContent.content.rendered"></div>
    </template>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      page: 'page/page',
    }),
    pageContent() {
      return this.page(this.$route.params.pageSlug);
    },
  },

  components: {
    Loader,
  },
};
</script>
