<script setup lang="ts">
import { useMeta } from 'vue-meta';
import { RouterView } from 'vue-router';
import TheLoader from '@/components/TheLoader.vue';
import { useStateStore } from '@/stores/state';
import { WebsiteName } from '@/composables/api/constants';

const stateStore = useStateStore();
useMeta({
  title: '',
});
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | ${WebsiteName}` : WebsiteName
    }}</template>
  </metainfo>
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
