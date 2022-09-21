import type { Post } from '@/composables/api/types';

import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { getPosts as callGetPostsApi } from '@/composables/api/post';

const createPostSlug = (post: Post) => {
  const slug = post.link.replace(
    window.location.protocol + '//' + window.location.host,
    ''
  );
  post.slug = slug;
  return post;
};

const createPostUtcDate = (post: Post) => {
  post.date_utc = post.date_gmt + 'Z';
  return post;
};

export const usePostStore = defineStore('posts', () => {
  const _posts = ref<Post[]>([]);

  const storePosts = (fetchedPosts: Post[]) => {
    _posts.value = fetchedPosts;
  };

  const fetchPosts = async (limit: number) => {
    const posts = await callGetPostsApi(limit);
    posts.map((post, i) => {
      posts[i] = createPostSlug(post);
      posts[i] = createPostUtcDate(post);
    });
    storePosts(posts);
  };

  const LIMIT = 5;
  const recentPosts = computed(() => {
    if (LIMIT == null || !Number.isInteger(LIMIT)) {
      return _posts.value;
    }
    return _posts.value.slice(0, LIMIT);
  });

  return {
    _posts,
    recentPosts,
    fetchPosts,
    storePosts,
  };
});
