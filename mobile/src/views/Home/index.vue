<template>
  <div>
    <van-nav-bar title="标题" left-arrow />
    <van-button round block type="info" @click="logout">退出登录</van-button>
    <div>
      <van-cell v-for="item in list" :key="item.id" :title="item.reviewer" :value="item.title" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$request('/mock/dev-api/table/list').then((res) => {
        this.list = res.data.list;
      });
    },

    logout() {
      this.$dialog
        .confirm({
          title: '温馨提示',
          message: '退出账号',
        })
        .then(
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
@import 'src/styles/mixin.scss';

.demo {
  width: rem(100px);
  height: rem(100px);
  background-color: #000;
}
</style>