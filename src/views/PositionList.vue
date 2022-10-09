<template>
  <div class="position-list-page">
    <h2>Positions List</h2>
    <el-table class="pos-list-table" :data="tableData" style="width: 100%">
      <el-table-column
        v-for="(item, idx) in tableHeader"
        :key="idx"
        :prop="item"
        :label="item"
      >
      </el-table-column>
      <el-table-column label="Operations" width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.$index)" type="text" size="small"
            >Edit</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Loading } from "element-ui";
export default {
  name: "PositionList",
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
      this.tableData = await this.getPosList();
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
      getPosList: "getPosList",
    }),
    edit(idx) {
      const id = this.tableData[idx].id;
      this.$router.push({ name: "EditPosition", params: { id } });
    },
  },
};
</script>
<style lang="scss" scoped>
.position-list-page {
  padding: 20px;
  .pos-list-table {
    border: 1px solid #cdc6c6;
    width: 90%;
    max-height: calc(100vh - 200px);
  }
}
</style>
