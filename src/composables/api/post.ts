import axios from 'axios';
import { useRoute } from 'vue-router';
import type { Post } from './types';
import { ApiBasePath } from '@/composables/api/constants';

export const getPosts = async (limit: number): Promise<Post[]> => {
  try {
    const { data } = await axios.get(`${ApiBasePath}posts?per_page=${limit}`);
    return data;
  } catch (error) {
    return (error as any).message;
  }
};

export const getPost = async (slug?: string): Promise<Post> => {
  try {
    const route = useRoute();
    const _slug = slug != null ? slug : route.params.postSlug;
    const { data } = await axios.get(`${ApiBasePath}posts?slug=${_slug}`);
    return data[0];
  } catch (error) {
    return (error as any).message;
  }
};
