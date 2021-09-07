<template>
<el-container style="height: 620px">
  <el-aside width="200px">
    <div class="aside_avatar">
      <el-avatar :size="70">
          <img alt="" src="./assets/avatar1.png"/>
      </el-avatar>
      <h4>Stone</h4>
          <div class="icon_social">
            <a class="fb" href="https://www.facebook.com/yu.stone.3/" style="margin-right:20px; color: inherit">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a class="ig" href="https://www.instagram.com/stnyu/" style="color: inherit;">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </div>
    </div>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <span>stnyu</span>
    </el-header>

    <el-main>
      <el-row :gutter="20">
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card shadow="hover">
            <img src="./assets/3.png" class="image">
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

  </el-container>
</el-container>
</template>


<script>
import { defineComponent } from 'vue'
import { ElContainer,ElMain,ElAside,ElHeader,ElCol, ElRow } from 'element-plus'
import { ElCard,ElButton } from 'element-plus'
import { ElAvatar} from 'element-plus'
import '/node_modules/element-plus/dist/index.css'

export default defineComponent({
  name: "ElementPlus",
  components: {
    ElContainer,ElMain,ElAside,ElHeader,ElCol, ElRow,
    ElAvatar,ElCard,ElButton,
  },
  data() {
    return {
       src1:
         "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
       currentDate: new Date(),
       circleUrl:
         'https://miro.medium.com/max/676/1*XEgA1TTwXa5AvAdw40GFow.png'
    };
  },
});
</script>

<style>
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
  .aside_avatar{
    margin-top: 50px;
    text-align: center;
  }
  .el-header {
    background-color: #fff;
    color: var(--el-text-color-primary);
    line-height: 60px;
  }

  .el-aside {
    color: inherit;
    font-family: sans-serif;
    font-size: 13px;
  }
  .el-container {
    overflow: hidden;
  }
  .icon_social{
    text-align: center;
    padding: 0;
    margin-top: 400px;
  }
</style>
