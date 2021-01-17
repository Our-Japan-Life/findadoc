<template>
  <div class="center login-div">
    <div class="login-div">
      <h2>Log in to your account</h2>
    </div>
    <div>
      <input class="input-fields" type="email" placeholder="Email address" v-model="account.email" required />
    </div>
    <div>
      <input @input="checkPasswordLength()" class="input-fields" id="user-password" type="password" placeholder="Password" v-model="account.password" required />
    </div>
    <div>
      <input type="checkbox" @click="showPassword">Show password
    </div>
    <div v-if="passwordMinChars === false">Password too short</div>
    <div>
      <button class="login-btn-form" @click="login">Login</button>
    </div>
    
    <div>Don't have an account? <nuxt-link to="/signup">Sign up!</nuxt-link></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    account: {
      email: "",
      password: "",
    },
    isError: false,
    errMsg: "",
    passwordMinChars: null,
  }),
methods: {
      login() {
      this.$store.dispatch("admin/login", this.account).catch((error) => {
        console.log(error);
        this.isError = true;
        this.errMsg = error.code;
        setTimeout(() => {
          this.isError = false;
        }, 5000);
      });
      this.$router.push("/");
    },
    showPassword() {
      const togglePassword = document.getElementById("user-password");
      if (togglePassword.type === "password") {
        togglePassword.type = "text";
      } else {
        togglePassword.type = "password";
      }
    },
    checkPasswordLength() {
      const passwordInput = document.getElementById("user-password").value
      this.passwordMinChars = passwordInput.length >= 6;
    },
  },
};
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
  background-color: rgb(194, 227, 228);
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