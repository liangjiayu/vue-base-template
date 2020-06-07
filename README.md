## 特性

- `vue-cli4` 标准的项目配置和依赖
- 项目采用的预处理为`scss`，内置部分常用的样式和方法
- 内置`axios`、`router`、`store`、并进行了简单封装，方便针对业务进行二次修改
- 分成两个端，`web`、`mobile`，对应采用的UI组件为`element`、`vant`，根据需求选择



## 安装

```bash
git clone https://github.com/liangjiayu/vue-base-template.git

cd web

npm install

npm run serve
```



## 打包

```bash
# 测试环境
npm run build:stage

# 生产环境
npm run build:prod
```





## 目录说明

```bash
│      
└─src
    │  App.vue
    │  main.js
    │  permission.js // 全局权限
    │  
    ├─api // 接口管理
    │      
    ├─assets  // 静态资源
    │          
    ├─components  // 全局组件
    │          
    ├─configs
    │      config.js  // 核心配置
    │      
    ├─layout // 项目布局
    │      
    ├─plugins  // 常用的插件 如网络请求 ui组件
    │      
    ├─router  // 路由配置
    │          
    ├─store // 状态管理
    │          
    ├─styles // 全局样式和方法
    │      
    ├─utils // 工具类
    │      
    └─views // 开发页面
                

```

