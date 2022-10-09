<template>
  <div class="home">
    <div class="actions-list">
      <el-button @click="$router.push('/CreatePosition')" type="warning" plain
        >Create position</el-button
      >
      <el-button @click="$router.push('/PositionList')" type="warning" plain
        >Positions list</el-button
      >
      <el-button @click="$router.push('/CreateCandidate')" type="warning" plain
        >Create candidate</el-button
      >
      <el-button @click="$router.push('/CandidateList')" type="warning" plain
        >Candidates list</el-button
      >
            <el-button @click="$router.push('/CreateEmployee')" type="warning" plain
        >Create Employee</el-button
      >
      <el-button @click="$router.push('/EmployeeList')" type="warning" plain
        >Employee list</el-button
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  methods: {
    ...mapActions({}),
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: calc(100vh - 61px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .actions-list {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 15% 10%;
    button {
      width: 300px;
      height: 50px;
      font-size: 18px;
      font-weight: bold;
      margin-left: 0px;
    }
  }
  background-image: url("../assets/hp-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
