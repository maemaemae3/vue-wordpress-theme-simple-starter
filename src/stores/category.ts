import type { Category } from '@/composables/api/types';

import { ref } from 'vue';
import { defineStore } from 'pinia';

import { getCategories as callGetCategoriesApi } from '@/composables/api/category';

export const useCategoryStore = defineStore('categories', () => {
  const _categories = ref<Category[]>([]);

  const storeCategories = (fetchedCategories: Category[]) => {
    _categories.value = fetchedCategories;
  };

  const fetchCategories = async () => {
    const categories = await callGetCategoriesApi();
    storeCategories(categories);
  };

  return {
    _categories,
    fetchCategories,
  };
});
