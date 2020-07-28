<template>
    <div>
         <el-table
        ref="multipleTable"
        :data="tableData"
        class="zt_table"
        :height="tableHeight"
        :header-cell-style="{background:'rgba(245,247,250,1)'}"
        @row-click="handleRowClick"
      >
        <el-table-column
          v-for="item in this.tableColumnList"
          :type="item.type"
          :formatter="dateFormatter"
          :label="item.label"
          :key="item.label"
          :fixed="item.fixed"
          :prop="item.prop"
          :width="item.width"
           sortable
          :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column label="操作" v-if="this.tableOperateList">
          <template slot-scope="scope">
            <i v-for="(item,index) in tableOperateList" :key="index" :class="item.icon"
               @click="item.click(scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            tableData:[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          tableColumnList:[{
            prop:'date',
            label:'日期',
            // width:'50px',
            // sortable:'true'
          },{
            prop:'name',
            label:'姓名',
            // width:'50px'
            // sortable:'false'       
          },{
            prop:'address',
            label:'地址',
            // sortable:'false'
            // width:'80px'
          }]
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>