// All configuration item explanations can be find in https://cli.vuejs.org/config/

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // scss 全局共享的属性和方法
        prependData: `@import "src/styles/mixin.scss";`,
      },
    },
  },
};
