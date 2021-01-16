<template>
  <div class="center login-div">
    <div class="login-div">
      <h2>Log in to your account</h2>
    </div>
    <div>
      <input class="input-fields" type="email" placeholder="Email address" required />
    </div>
    <div>
      <input class="input-fields" type="password" placeholder="Password" required />
    </div>
    <div>
      <input type="checkbox">Show password
    </div>
    <div>
      <button class="login-btn-form">Login</button>
    </div>
    
    <div>Don't have an account? <nuxt-link to="/signup">Sign up!</nuxt-link></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login-div {
  /* display: inline-block; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.input-fields {
  text-align: center;
  font-size: 16px;
  width: 400px;
  height: 30px;
  margin: 10px;
  padding: 0px;
  border-radius: 5px;
  border: 200px;
  background-color: rgb(163, 157, 197);
}
.login-btn-form {
  background-color: rgb(47, 45, 58);
  width: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  border: 0px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
}
</style>