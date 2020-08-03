<template>
  <div class="search-form">
    <el-form
      :model="value"
      :rules="rules"
      ref="searchform"
      label-width="100px"
      class="demo-ruleform"
    >
      <slot name="formItem" />
      <template v-for="(item,index) in formConfig.formItemList">
        <el-row :key="index">
          <template v-for="(i,k) in item">
            <el-col :span="i.width" :key="k">
              <template v-if="['text','textarea','number','email'].indexOf(i.type) !==-1">
                <el-form-item :label="i.label" :prop="i.prop ? i.prop : ''">
                  <el-input :type="i.type" v-model="value[i.name]" :placeholder="i.placeholder"></el-input>
                </el-form-item>
              </template>
              <template v-if="i.type === 'select'">
                <el-form-item :label="i.label" :prop="i.prop ? i.prop : ''">
                  <el-select v-model="value[i.name]" placeholder>
                    <el-option
                      v-for="(j, k) in i.optList"
                      :key="k"
                      :label="j.label"
                      :value="j.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </template>
              <template v-if="['data', 'datetimerange', 'datetime'].indexOf(i.type) !== -1">
                <el-form-item :label="i.label" :prop="i.prop ? i.prop : ''">
                  <el-date-picker
                    v-model="value[i.name]"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd HH:mm:ss"
                  ></el-date-picker>
                </el-form-item>
              </template>
              <template v-if="i.type == 'switch'">
                <el-form-item :label="i.label" :prop="i.prop ? i.prop : ''">
                  <el-switch v-model="value[i.name]"></el-switch>
                </el-form-item>
              </template>
              <template v-if="i.type == 'radio'">
                <el-form-item :label="i.label">
                  <el-radio-group v-model="value[i.name]" @change='radioChange' >
                    <el-radio v-for="(j, k) in i.optList" :label="j" :key="k"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </template>
            </el-col>
          </template>
        </el-row>
      </template>
      <div class="searchBtn">
         <el-button-group>
            <el-button
              v-for="(item, index) in formConfig.operate"
              :key="index"
              size="small"
              :type="item.type"
              :icon="item.icon"
              @click.stop.prevent="item.handleClick"
              >{{ item.name }}
            </el-button>
          </el-button-group>
          <slot name="operate"></slot>
      </div>
    </el-form>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    formConfig:{
      type:Object,
      default:()=>{}
    },
    value:{
      type:Object,
      default:()=>{}
    },
    rules:{
     type:Object,
     default:()=>{}
    }
  },
  data(){
    return{
      isSearchLock: true
    }
  },
  methods:{
    //子组件的校验，传递到父组件
    validateForm(){
      let flag = null;
      if(this.isSearchLock){
       this.$refs["searchform"].validate(valid=>{
         let vm = this;
         if(valid){
         flag = true
         vm.isSearchLock = flag;
         }else{
           flag = false;
           vm.isSearchLock = flag;
           this.$message.error('信息填写不完整，请继续填写');
           setTimeout(()=>{
             vm.isSearchLock = true
           },2000)
         }
       })
      }
      return flag
    },
    resetFields(){
      this.$refs['searchform'].resetFields()
    },
    radioChange(val){
      console.log(val)
      this.$emit('radioChange',val)
    }
  }
};
</script>

<style lang="scss" scoped>
 .el-form-item__content{
    .el-date-editor--datetimerange {
    width: 100%;
   }
 }
 .searchButton{
   text-align: center;
   .el-button{
     background-color:#4a91d7;
     width: 96px;
     color: #fff;
     &:first-child{
       margin-right: 5px;
     }
   }
 }
</style>