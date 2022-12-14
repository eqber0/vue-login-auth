<template>
  <div class="container" style="height: 100vh">
    <div class="row align-items-center justify-content-center h-100">
      <div class="col-6">
        <h3>Login</h3>
        <hr />
        <form action="" @submit.prevent="onLogin">
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model="email" />
          </div>
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
          <br />
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" />
          </div>
          <div class="error">
            {{ errors.password }}
          </div>
          <p>
            You don't have an account
            <nuxt-link to="/register" class="primary">register</nuxt-link>.
          </p>
          <div class="my-3">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpValidations from "../services/SignupValidations";
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    onLogin() {
      let validations = new SignUpValidations(this.email, this.password);
      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      } else {
        console.log("Başarılı");
      }
    },
  },
};
</script>
