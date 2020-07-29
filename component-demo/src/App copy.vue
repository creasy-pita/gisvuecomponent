<template>
  <div class="app-root" :class="themeClass">
    <div class="app-containter">
      <!-- <el-button type="primary" icon="el-icon-edit" class="ReeButton">编辑</el-button> -->
       <select v-model="theme">
         <option value="default">默认</option>
         <option value="green">标准</option>
       </select>
   
    <div class="example-table-box">
      <!-- <p class="basestyle">基础表格</p> -->
    
       <ButtonList></ButtonList>
       <SearchItem></SearchItem>
       
      <free-table
        border
        stripe
        :data="data"
        :column="basicColumn"
        @selection-change="selectionChange"
        pagination
        :auto-scroll="false"
        :total="100"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getList"
      ></free-table>
    </div>
     </div>
    <!-- <ButtonList msg="Welcome to Your Vue.js App"/> -->
    <!-- <SearchItem/> -->
    <!-- <FormComponent/> -->
  </div>
</template>

<script>
import tablelist from '@/components/workcenter/tablelist.vue';
// import SearchItem from './components/SearchItem.vue'
// // import FormComponent from './components/FormComponent.vue'
// import FreeTable from "@/components/FreeTable";
// import TableData from "@/table";
// import ButtonList from "@/components/ButtonList.vue"

export default {
  name: "App",
  components: {
    tablelist
    // // ButtonList,
    // SearchItem,
    // // FormComponent
    // FreeTable,
    // // FreeButton,
    // ButtonList
  },
  mixins: [TableData],
  data() {
    return {
      columnsProps: {
        width: "auto"
      },
      total: 0,
      listQuery: {
        page: 2,
        limit: 20
      },
      editForm: {},
      dialogVisible: false,
      msg: 'Dynamic Themes',
      theme: 'default',
    };
  },
  computed:{
    themeClass(){
      return `theme-${this.theme}`
    }
  },
  methods:{
    handleClick(){
      this.show = !this.show
    }
  }
};
</script>

<style lang="scss">
 @import "./assets/_theme.scss";
.app-containter{
  @include mytheme;
}
</style>
