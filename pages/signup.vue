<template>
  <div class="center login-div">
    <form
      class="center login-div"
      action="submit"
      method="POST"
      @submit.prevent="pressed"
    >
      <div class="login-div">
        <h2>Register a new account</h2>
      </div>
      <div>
        <input
          class="input-fields"
          type="email"
          placeholder="Email address"
          v-model="account.email"
          required
        />
      </div>
      <div>
        <input
          @input="checkPasswordLength"
          class="input-fields"
          type="password"
          placeholder="Password"
          v-model="account.password"
          required
        />
      </div>
      <div>
        <input
          @input="comparePasswords"
          class="input-fields"
          type="password"
          placeholder="Confirm password"
          v-model="confirmPassword"
          required
        />
      </div>
      <div v-if="samePassword === false">Passwords don't match</div>
      <div v-if="passwordMinChars === false">Password too short</div>
      <div>
        <button type="submit" class="login-btn-form">Sign up</button>
      </div>
    </form>
    <div>
      Already have an account? <nuxt-link to="/login">Login!</nuxt-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      account: {
        email: "",
        password: "",
      },
      confirmPassword: "",
      samePassword: false,
      passwordMinChars: null,
    };
  },
  methods: {
    pressed() {
      console.log("SIGNING UP");
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.account.email,
          this.account.password
        )
        .then((user) => {
          console.log(user);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = error;
        });
    },
    comparePasswords() {
      this.samePassword = this.account.password === this.confirmPassword;
    },
    checkPasswordLength() {
      this.passwordMinChars = this.account.password.length >= 6;
    },
  },
};
</script>

<style>
</style>