<template>
  <div id="app">
    <v-app>
      <header>
        <v-app-bar app dark>
          <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true"></v-app-bar-nav-icon>
          <router-link to="/">
            <v-toolbar-title>Vue Wordpress simple starter theme</v-toolbar-title>
          </router-link>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text to="about">about</v-btn>
            <v-btn text v-for="item in menu" :key="item.icon" :to="item.link">{{ item.title }}</v-btn>
          </v-toolbar-items>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list>
            <router-link v-for="item in menu" :key="item.icon" :to="item.link">
              <v-list-item>{{ item.title }}</v-list-item>
            </router-link>
          </v-list>
        </v-navigation-drawer>
      </header>
      <v-main>
        <v-container>
          <transition name="fade">
            <Loader v-if="isLoading || !initialDataLoaded"/>
          </transition>
          <div id="contents">
            <router-view></router-view>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loader from '@/components/Loader.vue';

export default {
  components: {
    Loader,
  },
  data() {
    return {
      showLoader: true,
      drawer: false,
    };
  },
  computed: {
    ...mapGetters({
      isLoading: 'states/isLoading',
      recentPages: 'page/recentPages',
      categories: 'category/allCategories',
      pagesLoaded: 'page/loaded',
      categoriesLoaded: 'category/loaded',
    }),

    menu() {
      const recentPages = this.recentPages(3);
      if (recentPages) {
        return recentPages.map(e => ({
          link: e.slug,
          title: e.title.rendered,
        }));
      }
      return [];
    },
    initialDataLoaded () {
      return this.pagesLoaded && this.categoriesLoaded;
    },
  },
  created() {
    this.$store.dispatch('category/getAllCategories');
    this.$store.dispatch('page/getAllPages');
  },

};
</script>

<style lang="scss" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.8.95/css/materialdesignicons.css";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fafffa;
}
#contents {
  margin: 50px;
}
a {
  text-decoration: none;
  > div {
    color: #fff;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>