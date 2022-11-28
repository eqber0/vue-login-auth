<template>
  <div v-if="getIsLogin">
    <button @click="logout" class="btn btn-danger" type="submit">Logout</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getIsLogin"]),
  },
  methods: {
    logout() {
      this.logout();
    },
    ...mapActions(["logout"]),
  },
};
</script>
