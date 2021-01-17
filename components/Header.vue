<template>
  <div class="header-bg">
    <div class="center">
      <nuxt-link to="/"><h1>Our Japan Life</h1></nuxt-link>
    </div>
    <div class="center">
      <nuxt-link to="/database"><button class="database-btn">Database</button></nuxt-link>
    </div>
    <div class="center">
      <nuxt-link to="/blog"><button class="blog-btn">Blog</button></nuxt-link>
    </div>
    <div class="center">
      <nuxt-link to="/login"><button class="login-btn">Login</button></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap');

.header-bg {
  background-color: rgb(47, 45, 58);
  height: 60px;
  display: flex;
  justify-content: space-between;
  color: rgb(226, 226, 226);
  padding-right: 8px;
}
h1 {
  color: #fff;
}
.center {
  position: relative;
  display: flex;
  align-items: center;
}
.database-btn {
  height: 30px;
  border: 0px;
  border-radius: 5px;
  font-family: 'Noto Serif JP', serif;
  font-size: 16px;
  background-color: #000;
  color: #fff;
}
.blog-btn {
  height: 30px;
  border: 0px;
  border-radius: 5px;
  font-family: 'Noto Serif JP', serif;
  font-size: 16px;
  background-color: rgb(47, 45, 58);
  color: rgb(226, 226, 226);
}
.blog-btn:hover {
  height: 30px;
  border: 0px;
  border-radius: 5px;
  font-family: 'Noto Serif JP', serif;
  font-size: 16px;
  background-color: rgb(70, 68, 85);
  color: rgb(226, 226, 226);
}
.login-btn {
  height: 30px;
  border: 0px;
  border-radius: 5px;
  font-family: 'Noto Serif JP', serif;
  font-size: 16px;
  background-color: rgb(47, 45, 58);
  color: rgb(226, 226, 226);
}
.login-btn:hover {
  height: 30px;
  border: 0px;
  border-radius: 5px;
  font-family: 'Noto Serif JP', serif;
  font-size: 16px;
  background-color: rgb(70, 68, 85);
  color: rgb(226, 226, 226);
}
</style>