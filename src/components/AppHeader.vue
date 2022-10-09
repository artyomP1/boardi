<template>
  <section>
    <div class="line"></div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item class="home-page-link" @click="$router.push('/home')"><img :src="require('../assets/logo-name.png')" alt="Logo" height="40px" /></el-menu-item>
      <el-menu-item v-if="user">Hi {{users.user_name}}!</el-menu-item>
    </el-menu>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>
<style scoped>
.el-menu-demo {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.el-menu::before {
    display: none;
    content: "";
}
.el-menu::after {
    display: none;
    content: "";
}
.home-page-link{
    font-size: 20px;
}
</style>
