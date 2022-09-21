<script setup lang="ts">
import ThePostList from '@/components/ThePostList.vue';
import ThePageList from '@/components/ThePageList.vue';
</script>

<template>
  <h1>Introduction</h1>
  <section>
    This is a sample page made by
    <a href="https://github.com/maemaemae3/vue-wordpress-theme-simple-starter">
      Vue Wordpress simple starter theme
    </a>
    .
    <br />
    Remove this part and start developing!
  </section>
  <h1>How To Use</h1>
  <section>
    <h2>Making pages</h2>
    There are two ways to make pages:
    <dl>
      <dt>Make components and add new routes in Vue</dt>
      <dd>
        Make new page in
        <span class="code">/src/views</span>
        directory (or somewhere) add define it in
        <span class="code">/src/router/index.ts</span><br />
        For more information, please look
        <a href="https://router.vuejs.org/guide/#javascript">
          Vue Router Guides
        </a>
        .<br />
        I made an easy
        <RouterLink to="about">example page</RouterLink>
        , take a look at
        <span class="code">/src/views/AboutView.vue</span>.<br />
      </dd>
      <dt>Add/Show page in wordpress</dt>
      <dd>
        Add page in wordpress and link to it.<br />
        You can simply link to it by using
        <span class="code">
          &lt;RouterLink to="[URL slug]"&gt;&lt;/RouterLink&gt;
        </span>
        <br />
        Check URL slug in your page editor!
        <img src="@/assets/image/sample_1.png" />
        I made an easy component example below to show pages link.<br />
      </dd>
    </dl>
    <ThePageList />
  </section>
  <section>
    <h2>Add images</h2>
    You can add images in two ways:
    <dl>
      <dt>Add images in <span class="code">/src</span> directory</dt>
      <dd>
        Put images under <span class="code">/src</span> (usually,
        <span class="code">/src/assets</span> or
        <span class="code">/src/static</span>) directory and write like<br />
        <span class="code">&lt;img src="@/assets/image/foo.png"&gt;</span>
        .<br />
        For more information, please look at
        <a href="https://vue-loader.vuejs.org/guide/asset-url.html">
          Vue Loader Guides
        </a>
        .<br />
      </dd>
      <dt>Add image in wordpress</dt>
      <dd>
        Add page in wordpress and link to it.<br />
        You can simply link to it by using
        <span class="code">&lt;img src="[URL slug]" /&gt;</span><br />
        Upload images from wordpress media page check image URL in properties.
        <img src="@/assets/image/sample_2.png" />
      </dd>
    </dl>
  </section>
  <section>
    <h2>Show loading screen</h2>
    <p>
      Loading screen is builtin in this theme!<br />
      To show loading screen, Import <span class="code">state</span> store like
      <span class="code">import { useStateStore } from '@/stores/state';</span>
      and run
      <span class="code">useStateStore().updateIsLoadingState(true);</span>.
      <br />
      Set <span class="code">false</span> to hide it.
    </p>
  </section>
  <section>
    <h2>Get/Show recent posts</h2>
    <p>
      I made an easy component example below to show recent posts.<br />
      Take a look at <span class="code">/src/components/Posts.vue</span>.<br />
      Import <span class="code">post</span> store like
      <span class="code">import { usePostStore } from '@/stores/post';</span>
      and run
      <span class="code">usePostStore().fetchPosts([post count you want]);</span>.
    </p>
    <ThePostList />
  </section>
  <section>
    <h2>Get/Show single post</h2>
    <p>
      I made an easy component example to show recent posts.<br />
      Take a look at <span class="code">/src/views/PostView.vue</span>.<br />
      Make sure to Update your permalink settings `(Settings -> Permalinks)` to be "Day and name".<br />
      (If you don't like this behavior, you can change permalink settings)<br />
      Import <span class="code">post</span> api store like
      <span class="code">import { getPost } from '@/composables/api/post';</span>
      and run
      <span class="code">const post = await getPost([post slug]);</span>.<br />
      Or if you are already in
      <span class="code">/:year/:month/:day/:postSlug</span>
      route, you can just execute
      <span class="code">const post = await getPost();</span>.
    </p>
  </section>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 1em;
}
section {
  margin-bottom: 2em;
}

dl > dt {
  font-weight: 700;
  font-size: 1.2em;
}

dl > dd > img {
  display: block;
  margin: 20px 0;
}

.code {
  background-color: #eee;
  font-family: "Menlo", "Monaco", "Consolas", monospace;
  padding: 0 0.2em;
}
</style>
