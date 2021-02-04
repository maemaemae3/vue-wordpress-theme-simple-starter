<template>
  <div>
    <template v-if="pageContent">
      <h1>{{ pageContent.title.rendered }}</h1>
      <div v-html="pageContent.content.rendered"></div>
    </template>
    <NotFound v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NotFound from '@/components/NotFound.vue';

export default {
  components: {
    NotFound,
  },

  computed: {
    ...mapGetters({
      page: 'page/page',
    }),
    pageContent () {
      return this.page(this.$route.params.pageSlug);
    },
  },

  metaInfo () {
    return {
      title: this.pageContent ? `${this.pageContent.title.rendered} | ${this.pageContent.site_title}` : '',
    }
  },
};
</script>
