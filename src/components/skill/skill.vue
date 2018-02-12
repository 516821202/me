<template>
  <div class="skill">
    <el-collapse v-model="activeName" v-for="(item,index) in collapses" :key="index">
      <el-collapse-item :name='item.name'>
        <template slot="title">
         <div class="title"> <img :src="item.img" alt="" class="img"><span class="sp">{{item.title}}</span> </div>
        </template>
        <div class="slcd">熟练程度：<span>{{item.div1}}</span></div>
        <div class="cdxq">{{item.div2}}</div>
      </el-collapse-item>
  </el-collapse>
  </div>
</template>

<script>
import html5 from './html5.png'
import js from './javascript.png'
import jq from './jquery.png'
import less from './less.png'
import vue from './vue.png'
import timg from './timg.png'
export default { 
  data () {
    return {
      activeName: '1',
      collapses:[
        {'title':'HTML+css3','name':'1','img':html5,'div1':'掌握','div2':'前端必修课，常规网页结构没有什么问题，移动端也做过公众号和app项目。对于html5+css3的用处还是移动端较多，平时也用ui框架进行网页机构搭建。对于不会的知识，还是秉承一个原则：百度。。。！'},
        {'title':'javascript','name':'2','img':js,'div1':'一般','div2':'前端必修课，由于现在各种ui框架和js框架十分强大，所以一般都用框架或者ui工具解决，但是简单的动画制作、表单验证、AJAX没什么问题。对于不会的知识，还是秉承一个原则：百度。。。！'},
        {'title':'jquery','name':'3','img':jq,'div1':'掌握','div2':'作为一个十分强大的主流js框架，可以满足日常各种需求。对pc和移动端的兼容都非常不错，并且各种jq的ui插件也是眼花缭乱，可谓是前端技能首选框架，之前也用jq框架做个pc和移动端的项目，感觉简单快速，并且基本可以无视兼容性问题。对于不会的知识，还是秉承一个原则：百度。。。！'},
        {'title':'less','name':'4','img':less,'div1':'掌握','div2':'十分强大的css预处理语言，开发首选项，用法简单，一般没事问题。对于不会的知识，还是秉承一个原则：百度。。。！'},
        {'title':'vue','name':'5','img':vue,'div1':'一般','div2':'基础的很简单，高阶有很多细节需要注意。利用vue脚手架搭建环境十分简单暴力，还是比较喜欢这个框架，感觉会成为以后的主流。对于不会的知识，还是秉承一个原则：百度。。。！'},
        {'title':'其它','name':'6','img':timg,'div1':'一般/了解','div2':'1、node.js:学过express,没有实际运用过，最多的还是用于vue脚手架的搭建等。。。2、angular.js+react.js：了解原理，因为重点学习vue，所以没有进阶。。。3、git+svn：这两个工具我都会选择可视化工具并且汉化，这样容错少并且有利于更改错误。。。'},
                  
      ]
    };
  },
   methods: {
     
    }
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin"
.skill
  width 100%
  .title
    height 100%
    line-height 100%
    margin-left 10px
    padding-top 5px
    .img 
      display inline-block
      height 35px
      width 35px
      background-size 35px
      vertical-align bottom
      margin-right 10px
      animationtx(tx2,35px,35px)
    .sp
      display inline-block  
      font-size 20px
      margin-bottom 10px
  .el-collapse-item__content 
    margin 10px 10px 0 10px
    span 
      color #16c0f8
      font-weight bold
      font-size 15px
    .cdxq
      font-size 15px
      margin-top 5px

  
  

</style>