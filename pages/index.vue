<template>
  <div class="container text-center" style="height: 100vh">
    <div
      class="d-flex justify-content-center align-items-center flex-column h-100"
    >
      <Message class="d-flex justify-content-center" />
      <home />
      <LoginForm />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Home from "../components/Home.vue";
import LoginForm from "../components/LoginForm.vue";
import Message from "../components/Message.vue";

export default {
  components: { Message, Home, LoginForm },
  name: "IndexPage",
  computed: {
    ...mapGetters(["getIsLogin", "getLoginMessage"]),
  },
};
</script>
