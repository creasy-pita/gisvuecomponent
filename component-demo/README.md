[TOC]
## vue-free-table

> 基于 element ui table 二次封装，几乎支持原 table 所有的功能
**特性**

- 以 element-ui table 为基础进行二次封装，减少代码量
- 继承 element-ui table 组件的参数及事件
- 支持render渲染
- 支持slot插槽
- 支持组件引入
- 支持树形数据
- 支持分页功能 
**文档**

| 属性 | 说明 | 类型 | 默认 |
| ------------ |---------------|-------------|--------------|
| `data` | table 的 `data` 属性 | `Array` | `[]` |
| `column` | 用于控制表格列渲染 | `Array` | `[]` |
| `columns-props` | 用于定义所有 `column` 公共的属性 | `Object` | |
| `pagination` | 是否显示分页组件, 具体详细请看`pagination配置`栏目 | `Boolean` | `false` |

只是在 Element Table 封装了一层，原本设置在 Table 上的 props 与事件监听和设置都可以直接绑定到组件上，具体配置可参考[Element Tabel](https://element.eleme.io/#/zh-CN/component/table#table-attributes) 文档

**column 配置**
column 用于控制表格的列行为, 设置示例：

```javascript
  basicColumn: [
        { label: '选择',  prop: 'selection', type: 'selection' },
        { label: '办件状态', prop: 'ProStatus',width:110, sortable: true },
        { label: '环节状态', prop: 'LinkStatus' ,width:105,sortable: true },
        { label: '项目编号', prop: 'businessKey',width:105,sortable: true },
        { label: '办件名称', prop: 'city',width:105,sortable: true  },
        { label: '登记类型', prop: 'category', width: 130 },
        { label: '受理日期', prop: 'task_createTimeOn', width: 160  },
        { label: '开始日期', prop: 'startTime' , width: 160 },
        { label: '环节名称', prop: 'task_taskState' , width: 130 },
        { label: '在办人员', prop: 'task_assignee',  width: 130 },
        { label: '办理状态', prop: 'task_hastenState' , width: 130 },
        {
          label: '操作',
          fixed:'right',
          prop: 'cation',
          align: 'center',
          width: 100,
          render: (h, scope) => {
            return (
              <div>
                 <el-link type="primary" onClick={()=>{this.fileBag(scope)}}>打开办件</el-link>
              </div>
            )
          }
        },
      ],
```

**columns-props配置**
columns-props用于配置 columns 各列默认的 props 属性，

```javascript
const columnsProps ={
  align: 'left',
  minWidth: 120
}
```

**pagination配置**
pagination用于控制显示分页组件, pagination分页组件是继承el-pagination的二次封装，
| 参数 | 说明 |类型	| 默认值
| --- | --- | --- | --- |
| `total`| 总条目数  | `Number`| /  |
| `page`| 当前页数 支持 `.sync` 修饰符| `Number`  | 1  |
| `limit`| 每页显示条目个数，支持 `.sync` 修饰符| `Number` | 20 |
| `page-sizes`  | 每页显示个数选择器的选项设置  | `Number[]`  | [10, 20, 30, 50] |
| `hidden`| 是否隐藏   | `Boolean`| `false` |
| `auto-scroll`| 分页之后是否自动滚动到顶部 | `Boolean` | `true`  |

其它 Element 的 el-pagination支持的属性，它也都支持
**示例**

```javascript
<template> 
   <free-table
          border
          stripe
          :data="tableDateget"
          :column="basicColumn"
          @selection-change="selectionChange"
          pagination
          :auto-scroll="false"
          :total="100"
          :page.sync="listQuery.page"
          :limit.sync="listQuery.limit"
          @pagination="getList"
          height="400px"
        ></free-table>
</template>
  
  <script>
  import FreeTable from "@/components/FreeTable";

export default {
  name: "workcenter",
  components: {
    FreeTable,
  },
//   mixins: [TableData],
  data() {
    return {
      columnsProps: {
        width: "auto",
      },
      tableButtonList: [
        //按钮的数据
        {
          name: "打包", //按钮名称
          type: "primary", //按钮种类
          size: "small", //按钮的尺寸
          handleClick: this.handlPack,
        },
        {
          name: "拆包", //按钮名称
          type: "primary", //按钮种类
          size: "small", //按钮的尺寸
          handleClick: this.handleUnpack,
        },
        {
          name: "批量移交", //按钮名称
          type: "primary", //按钮种类
          size: "small", //按钮的尺寸
          handleClick: this.Batchtransfer,
        },
        {
          name: "批量撤回", //按钮名称
          type: "primary", //按钮种类
          size: "small", //按钮的尺寸
          handleClick: this.Batchdrawal,
        },
        {
          name: "设置", //按钮名称
          type: "primary", //按钮种类
          size: "small", //按钮的尺寸
          icon: "el-icon-setting",
          plain: true,
          handleClick: this.handlsetting,
        },
        {
          name: "高级设置", //按钮名称
          type: "primary", //按钮种类
          size: "small", //按钮的尺寸
          icon: "el-icon-setting",
          plain: true,
          handleClick: this.advancedSetting,
        },
      ],
      total: 0,
      listQuery: {  //翻页组件的数据
        page: 2,
        limit: 20,
      },
      editForm: {},
      dialogVisible: false,
      theme: "green",
      formConfig: {
        //查询组件的数据
        formItemList: [
          [
            {
              type: "text",
              width: 8,
              prop: "airport",
              label: "办件信息",
              name: "airport",
              placeholder: "请输入办件名称或者项目编号",
            },
            {
              type: "radio",
              width: 14,
              name: "radio",
              prop: "radio",
              label: "状态",
              change: this.radioChange,
              optList: ["新收办件", "在办办件", "挂起办件", "所有办件"],
            },
          ],
        ],
        operate: [
          //
          {
            type: "primary",
            name: "查询",
            handleClick: this.search,
            icon: "el-icon-search",
          },
          {
            type: "primary",
            name: "重置",
            // icon:''
            handleClick: this.reset,
          },
        ],
      },
      form: {  //与查询组件相关联的
        airport:'',
        radio:"在办办件",
      },
      selectedForm: [],
      handinInformation: false, //打开办件的弹出框显示
      tableDateget:[],
      basicColumn: [
        { label: '选择',  prop: 'selection', type: 'selection' },
        { label: '办件状态', prop: 'ProStatus',width:110, sortable: true },
        { label: '环节状态', prop: 'LinkStatus' ,width:105,sortable: true },
        { label: '项目编号', prop: 'businessKey',width:105,sortable: true },
        { label: '办件名称', prop: 'city',width:105,sortable: true  },
        { label: '登记类型', prop: 'category', width: 130 },
        { label: '受理日期', prop: 'task_createTimeOn', width: 160  },
        { label: '开始日期', prop: 'startTime' , width: 160 },
        { label: '环节名称', prop: 'task_taskState' , width: 130 },
        { label: '在办人员', prop: 'task_assignee',  width: 130 },
        { label: '办理状态', prop: 'task_hastenState' , width: 130 },
        {
          label: '操作',
          fixed:'right',
          prop: 'cation',
          align: 'center',
          width: 100,
          render: (h, scope) => {
            return (
              <div>
                 <el-link type="primary" onClick={()=>{this.fileBag(scope)}}>打开办件</el-link>
              </div>
            )
          }
        },
      ],
    };
  </script>

```
## npm 
npm publish --registry=http://192.168.11.146:8073/repository/npm-internal/

npm install --registry=http://192.168.11.146:8073/repository/npm-all/ gisqworkcenter

## axios + MockAdapter+mockjs 实现多环境切换获取mockjs数据或真实接口数据

see the local project: E:\work\myproject\vue2\TestMyThirdPackage
组件打包后，主项目如何使用

```javascript
import Vue from 'vue';
import App from './App.vue';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
//导入 gisqworkcenter的mock服务
const mockAdapter = new MockAdapter(axios);
import {workcentermock} from "gisqworkcenter";

//gisqworkcenter中调用接口部分使用了 this.$axios,所以需要注册到Vue原型中
workcentermock.bootstrap(mockAdapter)
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
}).$mount('#app');

```

## axios-mock-adapter
主要查看  handle_request.js handlerequest
























# component-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
