import type { Page } from '@/composables/api/types';

import { ref } from 'vue';
import { defineStore } from 'pinia';

import { getPages as callGetPagesApi } from '@/composables/api/page';

export const usePageStore = defineStore('pages', () => {
  const _pages = ref<Page[]>([]);
  const isFetched = ref<boolean>(false);

  const storePages = (fetchedPages: Page[]) => {
    _pages.value = fetchedPages;
  };

  const fetchPages = async () => {
    const fetchedPages = await callGetPagesApi();
    storePages(fetchedPages);
    isFetched.value === true;
  };

  const getSinglePage = async (id: number | string) => {
    if (isFetched.value === false) {
      await fetchPages();
    }
    const field = typeof id === 'number' ? 'id' : 'slug';
    const page = _pages.value.find((page) => page[field] === id);
    return page || null;
  };

  return {
    _pages,
    fetchPages,
    storePages,
    getSinglePage,
  };
});
