<template>
  <div>
    <el-row>
      <el-col style="background-color:#ffffff;min-height:500px">
          <div class="cont">
             <span>周</span>
          </div>
          <div class="introduce">
            <p>一个刚在前端之路起步的有志气青年</p>
            <p>虽然没有很多工作经验，但有端正的学习态度、积极性上的精神</p>
          </div>  
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

}

</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin"
    .cont 
      margin-top 100px
      text-align center  
      background-color #ffffff
      span
        display block
        border-radius 50%
        width 100px
        height 100px
        line-height 100px
        font-size 40px
        font-weight bold
        color #ffffff
        background-color #16c0f8  
        margin 0 auto  
        animationtx(tx,100px,100px)
    .introduce
      max-width 100%
      text-align center
      margin-top 100px
      font-size 15px
      color #16c0f8
      p
        margin-bottom 20px

</style>