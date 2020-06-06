<template>
  <div>
    <div class="login-box">
      <el-form :model="form" :rules="formRules" ref="userForm" label-position="top">
        <el-form-item prop="userName" label="用户名称">
          <el-input v-model="form.userName" placeholder="请输入用户名称"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">立即创建</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
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
        userName: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    ...mapMutations('user', ['setUserInfo']),

    submitForm() {
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          this.setUserInfo({
            userName: '小明',
            roleName: '华为手机',
          });
          this.$router.push('/');
        }
      });
    },

    resetForm() {
      this.$refs.userForm.resetFields();
    },
  },
};
</script>

<style lang="scss">
.login-box {
  width: 450px;
  margin: 0 auto;
  padding: 100px 0;
}
</style>