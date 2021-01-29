<template>
  <div class="header-div">
    <el-row class="top-el-row">
      <el-col :span="3">
        <img class="top-header-img" src="../img/janebook.png"/>
      </el-col>
      <el-col :span="2">
        <div class="top-a">发现</div>
        <!--        <a href="/" class="top-a">发现</a>-->
      </el-col>
      <el-col :span="2">
        <div class="top-a">关注</div>
      </el-col>
      <el-col :span="2">
        <div class="top-a">消息</div>
      </el-col>
      <el-col :span="6">
        <div class="search-div">
          <el-input class="el-search-input-div" placeholder="请输入内容">
            <el-button class="search-button" slot="append" icon="el-icon-search"></el-button>
          </el-input>

        </div>

      </el-col>
      <el-col :span="3">
        <div class="top-a">字体</div>

      </el-col>
      <el-col :span="3">
        <div class="top-a">用户</div>
      </el-col>
      <el-col :span="3">
        <div class="top-a">写文章</div>
      </el-col>
    </el-row>
    <hr>
  </div>

</template>

<script>
  export default {
    name: "IndexVue"
  }
</script>

<style scoped>

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 56px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .top-header-img {
    height: 56px;
    width: 100px;
  }

  .input-with-select {
    height: 38px;
  }

  .top-el-row {
    /*border-style: none none solid none;*/
    font-size: 17px;
    text-align: center;
  }

  .top-a {
    color: #010201;
    margin-top: 15px
  }

  .header-div {
    height: 56px;
  }

  .search-div {
    margin-top: 10px
  }


  /deep/ .el-input__inner {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  /deep/ .el-input-group__append{
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }


</style>
