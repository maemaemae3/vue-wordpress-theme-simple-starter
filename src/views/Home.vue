<template>
  <div>
    <h1>Introduction</h1>
    <section>
      This is a sample page made by <a href='https://github.com/maemaemae3/vue-wordpress-theme-simple-starter'>Vue Wordpress simple starter theme</a>.<br>
      Remove this part and start developing!
    </section>
    <h1>How To Use</h1>
    <section>
      <h2>Making pages</h2>
      <p>
        There are two ways to make pages:
        <ul>
          <li>Make components and add new routes in Vue
            <p>
              Make new page in <span class="code">/views</span> directory (or somewhere) add define it in <span class="code">/routes/index.js</span><br/>
              For more information, plase look at <a href="https://router.vuejs.org/guide/#javascript">Vue Router Guides</a>.<br/>
              I made an easy  <router-link to="about">example page</router-link>, take a look at <span class="code">/src/views/About.vue</span>.<br/>
            </p>
          </li>
          <li>Add page in wordpress
            <p>
              Add page in wordpress and link to it.<br/>
              You can simply link to it by using <span class="code">&lt;router-link to="[URL slug]"&gt;&lt;/router-link&gt;</span><br/>
              Check URL slug in your page editor!
              <img src="@/assets/image/sample_1.png"/>
            </p>
          </li>
        </ul>
      </p>
    </section>
    <section>
      <h2>Add images</h2>
      <p>
        You can add images in two ways:
        <ul>
          <li>Add images in <span class="code">/src</span> directory
            <p>
              Put images under <span class="code">/src</span> (usually, <span class="code">/src/assets</span> or <span class="code">/src/static</span>) directory and write like<br/>
              <span class="code">&lt;img src="@/assets/image/foo.png"&gt;</span>.<br/>
              For more information, plase look at <a href="https://vue-loader.vuejs.org/guide/asset-url.html">Vue Loader Guides</a>.<br/>
            </p>
          </li>
          <li>Add image in wordpress
            <p>
              Add page in wordpress and link to it.<br/>
              You can simply link to it by using <span class="code">&lt;router-link to="[URL slug]"&gt;&lt;/router-link&gt;</span><br/>
              Upload images from wordpress media page check image URL in properties of it.
              <img src="@/assets/image/sample_2.png"/>
            </p>
          </li>
        </ul>
      </p>
    </section>
    <section>
      <h2>Show loading screen</h2>
      <p>
        Loading screen is builtin in this theme!<br/>
        You can use <span class="code">this.$store.dispatch('states/setLoading', true);</span><br/>
        To show loading screen, and set <span class="code">false</span> to remove it.
      </p>
    </section>
    <section>
      <h2>Get/Show recent posts</h2>
      <p>
        I made an easy component example below to show recent posts.<br/>
        Take a look at <span class="code">/src/components/Posts.vue</span>.<br/>
        Run <span class="code">this.$store.dispatch('post/getPosts', { limit: [posts you want to get] });</span> to get posts,<br/>
        and get posts data from <span class="code">post/recentPosts</span> in store.
      </p>
      <Posts/>
    </section>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue';

export default {
  components: {
    Posts,
  },
};
</script>

<style lang="scss" scoped>
.code {
  background-color: #eee;
}

section {
  margin-bottom: 3rem
}

img {
  width: 100%;
  margin: 20px;
  border: 1px solid #ccc;
}
</style>
