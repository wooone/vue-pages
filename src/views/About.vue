<template>
<el-container style="height: 650px">

  <el-container>

    <el-main style="text-align: center;">
    <el-row  style="text-align: center;">
        
        <el-col> 
            <el-image :src="src"></el-image>
        </el-col>
      
      </el-row>
    </el-main>

  </el-container>
</el-container>
</template>


<script>
import { defineComponent } from 'vue'
import { ElContainer,ElMain,ElRow,ElCol,ElImage } from 'element-plus'
import '/node_modules/element-plus/dist/index.css'

export default defineComponent({
  name: "ElementPlus",
  components: {
    ElContainer,ElMain,ElRow,ElCol,ElImage
  },
  data() {
    return {
       src:
         "https://lh3.googleusercontent.com/wVc-mHV5jV3hlDPx8Jli5KwI7i66tlriWK_EiIAUOOhUMynmo4sRtAcObqwcSFdlpDhIWoQmCdJnucfi2ZPmki6nZp07J420E7QDxir1hkvV3ir_-wMtX5NlRIX90_FOdLS3NFUx=w2400",
    };
  },
});
</script>

<style>
  .image {
    width: 40%;
    display: block;
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
