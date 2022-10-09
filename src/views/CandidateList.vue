<template>
  <div class="position-list-page">
    <h2>Candidate List</h2>
    <div class="list-table">
      <el-table class="pos-list-table" :data="tableData">
        <el-table-column
          v-for="(item, idx) in tableHeader"
          :key="idx"
          :prop="item"
          :label="item"
        >
        </el-table-column>
        <el-table-column label="Operations" >
          <template slot-scope="scope">
            <el-button @click="edit(scope.$index)" type="text" size="small"
              >Edit</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Loading } from "element-ui";
export default {
  name: "CandidateList",
  components: {},
  data() {
    return {
      tableData: [],
      tableHeader: [],
    };
  },
  async created() {
    let loadingInstance = Loading.service({ fullscreen: true });
    try {
      this.tableData = await this.getCandidateList();
      Object.keys(this.tableData[0]).forEach((element) => {
        this.tableHeader.push(element);
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
      getCandidateList: "getCandidateList",
    }),
    edit(idx) {
      const id = this.tableData[idx].id;
      this.$router.push({ name: "EditCanditate", params: { id } });
    },
  },
};
</script>
<style lang="scss" scoped>
.position-list-page {
  padding: 20px;
  .list-table {
    overflow-x: scroll;
    max-height: calc(100vh - 200px);
    border: 1px solid #cdc6c6;
    .pos-list-table {
      height: 100%;
      max-width: 100%;
       display: table;
    }
  }
}
</style>
