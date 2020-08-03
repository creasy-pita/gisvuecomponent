<template>
  <div class="app-root" :class="themeClass">
    <div class="app-containter">
      <span>选择样式：</span>
      <select v-model="theme">
        <option value="default">默认</option>
        <option value="green">标准</option>
      </select>
      <div class="example-table-box">
        <!-- 按钮组件 -->
        <ButtonList :tableButtonList="tableButtonList"></ButtonList>
        <el-divider></el-divider>
        <!-- 查询组件 -->
        <SearchForm
          ref="childRules"
          :formConfig="formConfig"
          :value="form"
          @radioChange="radioChange"
        ></SearchForm>
        <!-- 表单组件 -->
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
      </div>
    </div>
    <el-dialog
      title="办件信息"
      :visible.sync="handinInformation"
      width="30%"
    >
      <span>这是打开的办件信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handinInformation = false">取 消</el-button>
        <el-button type="primary" @click="handinInformation = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import FreeTable from "@/components/FreeTable";
// import TableData from "@/table";
import ButtonList from "@/components/ButtonList.vue";
import SearchForm from "@/components/SearchForm.vue";

export default {
  name: "workcenter",
  components: {
    FreeTable,
    ButtonList,
    SearchForm,
  },
props: {
  IP: {
    type: String,
  },
  PORT: {
    type: String,
  },
  schema:{
    type:String,
    default:"http"
  }  
},
//   mixins: [TableData],
  data() {
    return {
    appUrlPre: (this.IP)?(this.schema + "://"+this.IP+":"+this.PORT):""
    ,     
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
  },
  computed: {
    themeClass() {
      //设置不同样式的变量
      return `theme-${this.theme}`;
    },

  },
  mounted() {
    this.loadtabledata();
  },
  methods: {
    loadtabledata() {
      //通过mock获取数据
      console.log(this.appUrlPre + "/activiti/process/proinstlist");
      this.$axios
        .post(this.appUrlPre + "/activiti/process/proinstlist")
        .then((httpRes) => {
          const dataArry = httpRes.data.Users;
          dataArry.forEach(v=>{
            if(v.dueDate == null || (v.dueDate != null && v.logdueDate != '' && new Date(v.dueDate).getTime() > new Date().getTime())){
             v.ProStatus = "正常"     //办件状态
            }else{
              v.ProStatus = "已超期"
            }
            if(v.task_dueDate == null || (v.task_dueDate != null && v.task_dueDate != '' && new Date(v.task_dueDate).getTime() > new Date().getTime())){
              v.LinkStatus='正常'
            }else{
              v.LinkStatus = '已超期'
            }
          })
          console.log(dataArry)
          this.tableDateget = httpRes.data.Users;
          console.log("-------------");
          console.log(httpRes.data.Users);
        //   this.basicColumn = httpRes.data.Users
        });
    },
    handleClick() {
      this.show = !this.show;
    },
    selectionChange(val) {
      //表格中选中的数据
      this.selectedForm = val;
      console.log(this.selectedForm);
    },
    getList(val) {
      //数据请求换页
      console.log(val);
    },
    search() {
      //查询
      let flag = this.$refs["childRules"].validateForm();
      if (flag) {
        console.log(this.form)
        // const Inter = this.form
        alert('正在根据查询条件进行查询')
        this.loadtabledata()

      }
    },
    reset() {
      //重置
      this.$refs["childRules"].resetFields();
    },
    radioChange(value) {
      console.log(value);
      if (value === "在办办件") {
            this.tableButtonList = [
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
      ]
      } else {
        this.tableButtonList = [
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
        ];
      }
    },
    fileBag({ row }) {
      //打开办件中心的点击事件
      // alert(val)
      console.log(row);
      this.handinInformation = true;
    },
    handlPack() {
      //打包事件
      let procInstIds = [];
      if (this.selectedForm.length === 0) {
        this.$notify({
          title: "警告",
          message: "请选择要打包的数据",
          type: "warning",
        });
      } else {
        this.$notify({
          title: "成功",
          message: "打包已经完成",
          type: "success",
        });
      }
      this.selectedForm.forEach((v) => {
        if (v.f14 == null || v.f14 == "") {
          procInstIds.push(v.task_procInstId);
        } else {
          this.$notify({
            title: "警告",
            message: `${v.businessKey}已经打包请排除`,
            type: "warning",
          });
        }
      });
    },
    handleUnpack() {
      //拆包的方法
      if (this.selectedForm.length === 0) {
        this.$notify({
          title: "警告",
          message: "请选择要拆包的数据",
          type: "warning",
        });
      } else {
        this.$notify({
          title: "成功",
          message: "拆包已经完成",
          type: "success",
        });
      }
    },
    Batchtransfer() {
      //批量移交的方法
      if (this.selectedForm.length === 0) {
        this.$notify({
          title: "警告",
          message: "请选择要批量移交的数据",
          type: "warning",
        });
      } else {
        this.$notify({
          title: "成功",
          message: "数据的批量移交已经完成",
          type: "success",
        });
      }
    },
    Batchdrawal() {
      //批量撤回
      if (this.selectedForm.length === 0) {
        this.$notify({
          title: "警告",
          message: "请选择要批量撤回的数据",
          type: "warning",
        });
      } else {
        this.$notify({
          title: "成功",
          message: "数据的批量撤回已经完成",
          type: "success",
        });
      }
    },
    handlsetting(){
      alert("请进行设置")
    },
    advancedSetting(){
      alert('请进行高级设置')
    }
  },
};
</script>
<style lang="scss">
@import "../assets/_theme.scss";
.app-containter {
  @include mytheme;
}
</style>