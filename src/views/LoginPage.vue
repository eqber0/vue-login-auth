<template>
  <div class="container" style="height: 100vh">
    <div class="row align-items-center justify-content-center h-100">
      <div class="col-6">
        <div>
          <h3>Login</h3>
          <hr />
        </div>
        <div class="alert alert-danger" v-if="error">{{ error }}</div>
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
          <div class="error" v-if="errors.passoword">
            {{ errors.password }}
          </div>

          <div class="my-3">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import SignUpValidations from "../services/SignupValidations"
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      error: "",
    }
  },
  methods: {
    ...mapActions(["login"]),

    async onLogin() {
      let validations = new SignUpValidations(this.email, this.password)
      this.errors = validations.checkValidations()
      if (this.errors.length) {
        return false
      }
      try {
        await this.login({ email: this.email, password: this.password })
      } catch (err) {
        this.error = err
      }
    },
  },
}
</script>
