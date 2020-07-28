<template>
  <div class="btn-contenter">
     <el-button class="btnclass"
      :size="item.size"
      v-for="(item,index) in tableButtonList"
      :key="index"
      :icon="item.icon"
      :type="item.type"
      @click="item.click()"
      v-bind="$attrs"
    >{{item.name}}</el-button>
    <slot></slot>
  </div>
</template>

<script>

export default {
  inheritAttrs: false , // 关闭特性继承
  data(){
    return{
      tableButtonList:[
        {
          name:'点我点我',  //按钮名称
          type:'success',  //按钮种类
          size:'small',        //按钮的尺寸
          click:this.aaa,
          icon:'el-icon-search'
        },
           {
          name:'点我点我',  //按钮名称
          type:'success',  //按钮种类
          size:'small',        //按钮的尺寸
          click:this.aaa,
          icon:'el-icon-search'
        },
           {
          name:'点我点我',  //按钮名称
          type:'success',  //按钮种类
          size:'small',        //按钮的尺寸
          click:this.aaa,
          icon:'el-icon-search'
        },
          {
          name:'点我点我',  //按钮名称
          type:'success',  //按钮种类
          size:'small',        //按钮的尺寸
          click:this.aaa,
          icon:'el-icon-search'
        },
          {
          name:'点我点我',  //按钮名称
          type:'success',  //按钮种类
          size:'small',        //按钮的尺寸
          click:this.aaa,
          icon:'el-icon-search'
        },
      ]
    }
  },
  methods:{
    aaa(){
      console.log('sdfsdfsf')
    },
    // getSelection(item){
    //  console.log(item)
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_theme.scss";
.btnclass{
  height: 30px;
  // float: right;
}
</style>