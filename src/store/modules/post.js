import api from '../../api';

const createPostSlug = post => {
  const slug = post.link.replace(window.location.protocol + '//' + window.location.host, '');
  post.slug = slug;
  return post;
};

const createPostUtcDate = post => {
  post.date_utc = post.date_gmt + 'Z';
  return post;
};

// initial state
const state = {
  recent: [],
  loaded: false,
};

// getters
const getters = {
  loaded: state => state.loaded,
  recentPosts: state => limit => {
    if (
      !limit ||
      !Number.isInteger(limit) ||
      typeof limit === 'undefined'
    ) {
      return state.recent;
    }
    const recent = state.recent;
    return recent.slice(0, limit);
  },

  recentPostsLoaded: state => state.loaded,
};

// actions
const actions = {
  getPosts ({ commit }, { limit }) {
    api.getPosts(limit, posts => {
      posts.map((post, i) => {
        posts[i] = createPostSlug(post);
        posts[i] = createPostUtcDate(post);
      });

      commit('storePosts', { posts });
      commit('postsLoaded', true);
    });
  },
};

// mutations
const mutations = {
  storePosts (state, { posts }) {
    state.recent = posts;
  },
  postsLoaded (state, value) {
    state.loaded = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
