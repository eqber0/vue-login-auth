<template>
  <div>
    <app-header />
    <Nuxt />
  </div>
</template>

<script>
import appHeader from "@/components/common/appHeader.vue";
export default {
  components: {
    appHeader,
  },
};
</script>
