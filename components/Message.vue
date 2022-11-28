<template>
  <div>
    <div v-if="getLoginMessage" class="alert alert-danger">
      Username and/or password incorrect!
    </div>
    <div v-if="getIsLogin" class="alert alert-success">Login succesfully!</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getIsLogin", "getLoginMessage"]),
  },
};
</script>
