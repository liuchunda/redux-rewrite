### `npm install` 
安装依赖

### `npm run start` 
启动项目


这个项目是使用react-create-app 创建的一个模版。
代码内容是手写redux和react-redux。

目录结构：
```
src
├── component  <!-- react组件，展示了redux 和react-redux的用法 -->
│   ├── Color.js 
│   └── User.js
├── index.js <!-- 页面入口 -->
├── react-redux  <!-- react-redux的实现 -->
│   ├── Provider.js
│   ├── connect.js
│   ├── context.js
│   └── index.js
├── redux<!-- redux的实现 -->
│   ├── applyMiddleware.js
│   ├── bindActionCreators.js
│   ├── combineReducers.js
│   ├── compose.js
│   ├── createStore.js
│   ├── index.js
│   └── util
└── store <!-- redux项目中的使用 -->
    ├── action
    ├── action-types.js
    ├── index.js
    └── reducer
```
