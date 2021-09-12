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
        
        <el-col :span="6"> 
            <el-image :src="src" :preview-src-list="srcList"></el-image>
        </el-col>
        
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-image :src="src1" :preview-src-list="srcList"></el-image>
          </div>
        </el-col>

        <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="src1"></el-image></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="src"></el-image></div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card shadow="hover">
            <img src="https://miro.medium.com/max/676/1*XEgA1TTwXa5AvAdw40GFow.png" class="image">
            <div style="padding: 14px;">
              <span>網頁設計</span>
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
import { ElContainer,ElMain,ElAside,ElHeader,ElImage,ElCard,ElButton } from 'element-plus'
import { ElRow,ElCol } from 'element-plus'
import { ElAvatar} from 'element-plus'
import '/node_modules/element-plus/dist/index.css'

export default defineComponent({
  name: "ElementPlus",
  components: {
    ElContainer,ElMain,ElAside,ElHeader,ElImage
    ,ElCol,ElRow,ElAvatar,ElCard,ElButton
  },
  data() {
    return {
       src:
         "https://lh3.googleusercontent.com/nzVZhqPqHnjCLgS4zp9aY0is4hVFC4vnTwWD2vLH4z09WqHpd5ng9YmOeQZfcyZ1fci8WvIwlCUMFThL3lrXAuNaM8w7kPUULNJmxoYRY3DRnDCGRGANH14wEJ-9sRZIIOVARc_z=w1200",
       src1:
          "https://lh3.googleusercontent.com/01idxha_HVWa5xsVXt570FLVhMuL25GTQ-rTHCgHktcTil1y3y7XVVE22EAah8TfsJaqeWEYI0xcne9h6kYlVm8ydS6doCCisMwR3sE15cmMgRDl5ZzBh_jg3G0S752f0N9hFQ4C=w1200",  
       currentDate: new Date(),
       circleUrl:
         'https://miro.medium.com/max/676/1*XEgA1TTwXa5AvAdw40GFow.png',
      srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
        ],
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
