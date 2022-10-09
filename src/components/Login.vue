<template>
  <section>
    <form class="login-form">
      <el-input placeholder="User Name" v-model="userName"></el-input>
      <el-input
        placeholder="Password"
        v-model="password"
        show-password
      ></el-input>
      <div class="btn-container">
        <el-button type="text">Forgot password</el-button>
        <el-button @click="login" type="primary" round plain >Login</el-button>
      </div> 
    </form>
  </section>
</template>

<script>
export default {
  name: "Login",
  props: {},
  data() {
    return {
      userName: "",
      password: null,
    };
  },
  methods: {
    login(){
      this.$emit('login', {org_email: this.userName, password: this.password})
    }
  }
};
</script>

<style scoped lang="scss">
.login-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #f0f8ff;
  .el-input{
  margin-bottom: 5px;
  }
  .btn-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
