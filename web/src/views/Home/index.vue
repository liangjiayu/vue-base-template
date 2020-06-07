<template>
  <div>
    <div class="w1200 pt-30 pb-30">
      <div class="demo">法拉家纺垃圾啊了附件辣鸡垃圾啊樊辣椒了房间啊了放假啦就发垃圾立法解释了解放拉萨机了</div>
      <div class="tr mb-20">
        <el-button type="primary" @click="logout()">退出账号</el-button>
      </div>
      <el-table :data="tableData" border v-loading="tableLoading">
        <el-table-column prop="id" label="序号" width="100"></el-table-column>
        <el-table-column prop="time" label="日期" width="120"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="author" label="作者" width="100"></el-table-column>
        <el-table-column prop="rank" label="等级" width="100" v-slot="{row}">
          <template>
            <i class="el-icon-star-on" v-for="i in row.rank" :key="i"></i>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="类型" width="100" v-slot="{row}">
          <el-tag>{{row.type}}</el-tag>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100" v-slot="{row}">
          <template>
            <el-tag v-if="row.status==='published'" type="success">{{row.status}}</el-tag>
            <el-tag v-if="row.status==='draft'" type="info">{{row.status}}</el-tag>
            <el-tag v-if="row.status==='deleted'" type="danger">{{row.status}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="240" align="center">
          <template>
            <el-button type="primary" size="small">编辑</el-button>
            <el-button type="success" size="small">发布</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      tableLoading: false,
    };
  },
  created() {
    this.getTableList();
  },
  methods: {
    getTableList() {
      this.tableLoading = true;
      this.$servers.listModule.getList({}, { showLoading: false }).then(
        (res) => {
          this.tableLoading = false;
          this.tableData = res.data.list;
        },
        () => {}
      );
    },

    logout() {
      this.$confirm('退出账号', '温馨提示', { type: 'warning' }).then(
        () => {
          this.$store.commit('user/clearUserInfo');
          this.$router.push('/login');
        },
        () => {}
      );
    },
  },
};
</script>


<style lang="scss" scoped>
.demo {
  display: block;
  width: 200px;
  @include text-overflow(2);
}
</style>