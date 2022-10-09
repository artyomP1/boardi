<template>
  <div class="LoginPage">
    <Login @login="login" class="login" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Login from "../components/Login.vue";
import { Loading } from "element-ui";
export default {
  name: "LoginPage",
  components: { Login },
  methods: {
    ...mapActions({
      userLogin: "userLogin",
    }),
    async login(data) {
      let loadingInstance = Loading.service({ fullscreen: true });
      try {
        const user = await this.userLogin(data);
        this.$message({
          message: "Login successfully.",
          type: "success",
        });
      } catch (e) {
        this.$message.error(e);
      } finally {
        this.$nextTick(() => {
          loadingInstance.close();
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.LoginPage {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .login {
    width: 300px;
    padding-bottom: 25%;
  }
}
</style>
