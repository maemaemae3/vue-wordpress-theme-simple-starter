<template>
  <div id="posts">
    <h1>Recent Posts</h1>
    <template v-if="recentPostsLoaded">
      <v-container>
        <v-row>
          <v-col v-for="(post, index) of recentPosts(limit)" :key="index" cols="12" sm="4">
            <v-card hover width="300">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline">{{post.title.rendered}}</v-list-item-title>
                  <v-list-item-subtitle>{{new Date(post.date_utc).toLocaleDateString()}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-img
                src="https://raw.githubusercontent.com/maemaemae3/vue-wordpress-theme-simple-starter/main/vue-wordpress-theme-simple-starter.svg"
                height="100"
              ></v-img>

              <v-card-text v-html="post.excerpt.rendered">
              </v-card-text>

              <v-card-actions>
                <v-btn text color="deep-purple accent-4" :to="post.slug">
                  Read
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      limit: 3,
    };
  },
  computed: {
    ...mapGetters({
      recentPosts: 'post/recentPosts',
      recentPostsLoaded: 'post/recentPostsLoaded',
    }),
  },
  mounted() {
    this.$store.dispatch('post/getPosts', { limit: this.limit });
  },
}
</script>

<style lang="scss" scoped>
#posts {
  background-color: #333;
  border-radius: 25px;
  padding: 20px;
  > h1 {
    color: #fff;
  }
}
</style>