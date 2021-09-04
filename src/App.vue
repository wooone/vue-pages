<template>
  <el-container>
    <el-header>
      <h1>header</h1>
      <el-affix :offset="10">
        <el-button type="primary">距离顶部 10px</el-button>
      </el-affix>
    </el-header>

    <el-main>
      <h1>Main</h1>
      <img alt="Vue logo" src="./assets/logo.png" />
      <br />
      <el-button>我是 ElButton</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-divider></el-divider>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定時任務補償" name="fourth"
          >定时任务補償</el-tab-pane
        >
      </el-tabs>
      <el-divider></el-divider>

      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="src1"></el-image></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="src1"></el-image></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="src1"></el-image></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="src1"></el-image></div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card shadow="hover">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

    </el-main>

    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import { defineComponent } from 'vue'
import { ElButton, ElAffix, ElTabs, ElTabPane, ElImage, ElDivider, ElCol, ElRow, ElCard} from 'element-plus'
import '/node_modules/element-plus/dist/index.css'

export default defineComponent({
  name: "ElementPlus",
  components: {
    ElButton,
    ElAffix,
    ElTabs,
    ElTabPane,
    ElImage,
    ElDivider,
    ElCol,ElRow,ElCard
  },
  data() {
    return {
      src1:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      currentDate: new Date()
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #fff;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #fff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #fff;
  }
  /* 漢堡包 */
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 0;
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
  }
  .el-card{
    padding: '0px' ;
  }
</style>
