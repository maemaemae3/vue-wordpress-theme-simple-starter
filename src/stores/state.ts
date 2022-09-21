import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useStateStore = defineStore('state', () => {
  const isLoading = ref<boolean>(false);

  const updateIsLoadingState = (updatedState: boolean) => {
    isLoading.value = updatedState;
  };

  return {
    isLoading,
    updateIsLoadingState,
  };
});
