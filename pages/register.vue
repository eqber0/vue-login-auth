<template>
  <div class="container" style="height: 100vh">
    <div class="row align-items-center justify-content-center h-100">
      <div class="col-6">
        <h3>Register</h3>
        <hr />
        <form action="">
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" />
          </div>
          <br />
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" />
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
