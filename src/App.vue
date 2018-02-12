<template>
  <div id="app">
  <div class="header">
    <div class="container">
      <el-row>
        <el-col :span="12" :md="12" :sm="12" :xs="24">
            <el-dropdown trigger="click" class="hidden-sm-and-up down">
                <span class="el-dropdown-link">
                  <i class="el-icon-more-outline"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><router-link to="home">首页</router-link></el-dropdown-item>
                  <el-dropdown-item><router-link to="skill">技能</router-link></el-dropdown-item>
                  <el-dropdown-item><router-link to="introduce">自我介绍</router-link></el-dropdown-item>
                  <el-dropdown-item><router-link to="contact">联系我</router-link></el-dropdown-item>   
                </el-dropdown-menu>
              </el-dropdown>
            <div class="names">
              <span class="name">小瑜</span>
              <span class="name2">博客</span>
              <span class="hidden-xs-only qq">QQ：516821202</span>
            </div>  
        </el-col>
        <el-col :span="12" :md="12" :sm="12" class="hidden-xs-only">
          <div class="nav">
              <div class="nav-item">
                <router-link to="contact">联系我</router-link>
              </div>
              <div class="nav-item">
                <router-link to="introduce">自我介绍</router-link>
              </div>
              <div class="nav-item">
                <router-link to="skill">技能</router-link>
              </div>
                <div class="nav-item">
                <router-link to="home">首页</router-link>
              </div>
            </div> 
        </el-col>
      </el-row>  
    </div>  
  </div>
  <div class="main">
    <div class="container">
      <el-row>
        <el-col :span="24">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="footers">
    <el-row>
      <el-col :span="24">
          <div class="footer">
            <p>2018个人简历网站</p>
          </div>
      </el-col>
    </el-row>
  </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
   #app 
    .header
      position fixed
      top 0
      left 0
      width 100%
      height 60px
      z-index 100
      background-color #FFFFFF 
      .down 
        position absolute
        height 60px
        line-height 80px
        margin 0 20px 0 20px
        left 0
        i   
          font-size 30px
      .names  
        .name
          font-size 40px
          color #16c0f8
        .name2  
          font-size 30px
          color #16c0f8
        .qq
          font-size 12px
          color #bbbbc9
          border-left 1px solid #bbbbc9 
          padding-left 5px
          margin-left 5px
      .names,.nav
        height 60px
        line-height 60px
      .nav 
        float right
        font-size 20px
        .nav-item
          float right 
          margin-left  20px
          a.active
            color #16c0f8
            font-weight bold
            color rgb(22,192,248)
    .main
      margin-top  80px     
    .footers
      width 100%
      position fixed
      bottom 0
      left 0
      height 40px
      background-color #FFFFFF
      line-height 40px
      z-index 100
      .footer
        margin 0 auto
        text-align center
        p
        color #666666
        font-size 12px
@media screen and (max-width:1200px)
  .header
      .names
        margin-left  10px
      .nav 
        margin-right 10px
  .main
    margin 80px 10px 40px 10px
@media screen and (max-width:760px)
  .header
     text-align center
    .names
      margin 0 auto
    
   
  

</style>
