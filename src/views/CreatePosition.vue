<template>
  <div class="create-position">
    <section class="page-conatainer">
      <h2>Create Position</h2>
      <form v-if="formScheme.length > 0">
        <div
          class="input-container"
          v-for="(input, idx) in formScheme"
          :key="idx"
        >
          <label
            >{{ input.inputName }}:<span
              style="color: red"
              v-if="input.mandatory === 'true'"
              >*</span
            ></label
          >
          <el-input
            :required="input.mandatory === 'true'"
            :placeholder="input.inputName"
            :type="input.html_type"
            v-model="input.value"
          ></el-input>
        </div>

        <el-button :disabled="disabled" @click="createPos" type="primary"
          >Create</el-button
        >
      </form>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Loading } from "element-ui";

export default {
  name: "CreatePosition",
  data() {
    return {
      formScheme: [],
    };
  },
  async created() {
    let loadingInstance = Loading.service({ fullscreen: true });
    try {
      const res = await this.getPosScheme();
      this.formScheme = res.map((item) => {
        item.value = null;
        return item;
      });
    } catch (e) {
      this.$message.error(e);
    } finally {
      this.$nextTick(() => {
        loadingInstance.close();
      });
    }
  },
  methods: {
    ...mapActions({
      getPosScheme: "getPosScheme",
      savePos: "savePos",
    }),
    async createPos() {
      let loadingInstance = Loading.service({ fullscreen: true });
      try {
        const data = {};
        this.formScheme.forEach((item) => {
          data[item.inputName] = item.value;
        });
        const res = await this.savePos(data);
        this.$message({
          message: "Position saved successfully.",
          type: "success",
        });
        this.$router.push("/PositionList");
      } catch (e) {
        this.$message.error(e);
      } finally {
        this.$nextTick(() => {
          loadingInstance.close();
        });
      }
    },
  },
  computed: {
    disabled() {
      let isDisabled = false;
      this.formScheme.forEach((input) => {
        if (input.mandatory === "true" && !input.value) {
          isDisabled = true;
          return isDisabled;
        }
      });
      return isDisabled;
    },
  },
};
</script>
<style lang="scss" scoped>
.create-position {
  background-color: aliceblue;
  text-align: left;
  padding: 20px;
  .page-conatainer {
    background-color: #f5f5f5;
    border: 2px solid #c7c7c7;
    justify-content: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    padding: 20px;
    .input-container {
      width: 350px;
      margin-bottom: 8px;
      text-align: left;
      .label {
        margin-bottom: 3px;
      }
      @media only screen and (max-width: 500px) {
        width: 250px;
      }
    }
  }
}
</style>
