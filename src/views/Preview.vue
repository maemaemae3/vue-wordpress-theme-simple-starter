<template>
  <div>
    <Post v-if="post" :post="post"/>
    <Page v-else-if="page" :page="page"/>
    <Loader v-else/>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader.vue";
import Post from "@/components/Preview/Post.vue";
import Page from "@/components/Preview/Page.vue";
import SETTINGS from "../../settings";

export default {
  data() {
    return {
      post: null,
      page: null
    };
  },

  computed: {},

  beforeMount() {
    if (this.$route.query.p) { this.getPost(); }
    else if (this.$route.query.page_id) { this.getPage(); }
  },

  methods: {
    async getPost() {
      const uri = SETTINGS.API_BASE_PATH + "posts/" + this.$route.query.p + "?_wpnonce=" + this.$route.query.wpnonce;
      const response = await axios.get(uri);
      this.post = response.data;
    },
    async getPage() {
      const uri = SETTINGS.API_BASE_PATH + "pages/" + this.$route.query.page_id + "?_wpnonce=" + this.$route.query.wpnonce;
      const response = await axios.get(uri);
      this.page = response.data;
    }
  },

  components: {
    Loader,
    Post,
    Page,
  }
};
</script>