<template>
  <div class="login-box">
    <van-form ref="userForm">
      <van-field
        v-model="form.username"
        name="userName"
        label="用户名"
        placeholder="用户名"
        :rules="formRules.userName"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="formRules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" @click="submitForm">提交</van-button>
      </div>
    </van-form>
  </div>
</template>


<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      form: {
        userName: '',
        password: '',
      },
      formRules: {
        userName: [{ required: true, message: '请填写用户名' }],
        password: [{ required: true, message: '请填写密码' }],
      },
    };
  },
  methods: {
    ...mapMutations('user', ['setUserInfo']),

    submitForm() {
      this.$refs.userForm.validate().then(
        () => {
          this.setUserInfo({
            userName: '小明',
            roleName: '华为手机',
          });
          this.$router.push('/');
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style lang="scss">
.login-box {
  padding: 50px 0;
}
</style>