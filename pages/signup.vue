<template>
  <div class="center login-div">
    <div class="login-div">
      <h2>Register a new account</h2>
    </div>
    <div>
      <input class="input-fields" type="email" placeholder="Email address" required />
    </div>
    <div>
      <input class="input-fields" type="password" placeholder="Password" required />
    </div>
    <div>
      <input class="input-fields" type="password" placeholder="Confirm password" required />
    </div>
    <div>
      <button class="login-btn-form">Sign up</button>
    </div>
    
    <div>Already have an account? <nuxt-link to="/login">Login!</nuxt-link></div>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>