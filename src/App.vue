<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheLoader from '@/components/TheLoader.vue';
import { useStateStore } from '@/stores/state';

const stateStore = useStateStore();
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition name="fade">
        <Suspense>
          <!-- main content -->
          <component :is="Component"></component>
          <!-- loading state -->
          <template #fallback>
            <TheLoader />
          </template>
        </Suspense>
      </Transition>
    </template>
  </RouterView>

  <Transition name="fade">
    <TheLoader v-if="stateStore.isLoading" />
  </Transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
