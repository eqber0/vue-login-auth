<template>
  <div class="container" style="height: 100vh">
    <div class="row align-items-center justify-content-center h-100">
      <div class="col-6">
        <div>
          <h3>Register</h3>
          <hr />
          <div class="alert alert-danger" v-if="error">{{ error }}</div>
        </div>
        <form action="" @submit.prevent="onSignup()">
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model="email" />
            <div class="error" v-if="errors.email">
              {{ errors.email }}
            </div>
          </div>
          <br />
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" />
            <div class="error" v-if="errors.password">
              {{ errors.password }}
            </div>
          </div>
          <p>
            Already have an account
            <nuxt-link to="/login" class="primary">login</nuxt-link>.
          </p>
          <div class="my-3">
            <button type="submit" class="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import SignupValidations from "../services/SignupValidations"
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
    ...mapActions(["signup"]),
    onSignup() {
      let validations = new SignupValidations(this.email, this.password)
      this.errors = validations.checkValidations()

      if ("email" in this.errors || "password" in this.errors) {
        return false
      }
      this.signup({ email: this.email, password: this.password }).catch(
        (error) => {
          this.error = error
        }
      )
    },
  },
}
</script>
