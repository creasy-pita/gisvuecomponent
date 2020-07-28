<template>
  <div>
    <!-- <span @click="test">我是查询条件</span> -->
    <div>
      <el-form label-width="100px">
        <el-col class="QueryMarginR" style='width:30%' v-for="(item,index) in InputQuery" :key="index">
          <el-form-item :label="item.label">
            <el-input :value='item.vakue' @input="onInput" placeholder="请输入办件名称或者办件编号"></el-input>
          </el-form-item>
        </el-col>
            <el-col style='width:100%'>
            <el-form-item label="查询类型：" label-width="100px">
              <el-radio v-model="value" label="0" @change="search">按环节</el-radio>
               <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            </el-form-item>
          </el-col>
      </el-form>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      InputQuery: [
        {
          label: "办件信息:",
          value: "我是办件信息",
          width:"width:30%"
        },
           {
          label: "办件信息:",
          value: "我是办件信息",
           width:"width:30%"
        },
           {
          label: "办件信息:",
          value: "我是办件信息",
           width:"width:30%"
        }
      ],
      SelectQuery: [{

      }],
      InputQueryFlag: this.InputQuery ? true : false,
      SelectQueryFalg: this.SelectQuery ? true : false,
      value:''
    };
  },
  methods: {
    test() {
      alert(this.InputQueryFlag);
      alert(this.InputQuery);
      alert(this.SelectQueryFalg);
      console.log(this.SelectQuery);
      //    alert(this.SelectQuery)
    }
  },
  mounted() {}
};
</script>

<style lang="css" scoped>
.QueryMarginR{
   margin-right: 25px;   
}
</style>