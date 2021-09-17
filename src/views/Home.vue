<template>
<el-container style="height: 620px">

  <el-container>

    <el-main>
      <el-row :gutter="20">
        
        <el-col :span="6"> 
            <el-image :src="src" :preview-src-list="srcList"></el-image>
        </el-col>
        
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-image :src="src1" :preview-src-list="srcList1"></el-image>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-image :src="src2"></el-image>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-image :src="src3"></el-image>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        
        <el-col :span="6"> 
            <el-image :src="src4" :preview-src-list="srcList"></el-image>
        </el-col>
        
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-image :src="src5" :preview-src-list="srcList"></el-image>
          </div>
        </el-col>
      </el-row>
    </el-main>

  </el-container>
</el-container>
</template>


<script>
import { defineComponent } from 'vue'
import { ElContainer,ElMain,ElImage} from 'element-plus'
import { ElRow,ElCol } from 'element-plus'
import '/node_modules/element-plus/dist/index.css'

export default defineComponent({
  name: "ElementPlus",
  components: {
    ElContainer,ElMain,ElImage
    ,ElCol,ElRow
  },
  data() {
    return {
       src:
         "https://lh3.googleusercontent.com/nzVZhqPqHnjCLgS4zp9aY0is4hVFC4vnTwWD2vLH4z09WqHpd5ng9YmOeQZfcyZ1fci8WvIwlCUMFThL3lrXAuNaM8w7kPUULNJmxoYRY3DRnDCGRGANH14wEJ-9sRZIIOVARc_z=w1200",
       src1:
          "https://lh3.googleusercontent.com/01idxha_HVWa5xsVXt570FLVhMuL25GTQ-rTHCgHktcTil1y3y7XVVE22EAah8TfsJaqeWEYI0xcne9h6kYlVm8ydS6doCCisMwR3sE15cmMgRDl5ZzBh_jg3G0S752f0N9hFQ4C=w1200",
       src2:
          "https://lh3.googleusercontent.com/PHdaL_UxX9QzyBXvrs1GJ7iR0fAATgEIqGaXknOp7covZZfwvsXnCgmpxJiijYaJ74eyTSgkz49GeQk39pxc0DDxfgVcRzoN8yvU18FE1JJNIdmlOkgVMVqVKO4toLMRxOa1GXso=w1200",
       src3:
          "https://lh3.googleusercontent.com/Jl0mgqhk1TldgVn447Ls6Tz62Sdm_QLRvznddT9VrfXzf079NBlMNtZpimkIPAepU9r_KoKcg-nkgUWjd_XPne5HXxxExX1qfpVTm0WMwoTU44CmSUtWoONe6H2epBof8uXu3oK5jQ=w1200",
       src4:
          "https://lh3.googleusercontent.com/t1qJHswEGZHFhJwINwvSNxx-M5rasasrnAJd3VGa2dnJsDz-kKG9tv616MZncnLQdNdtt9aYIp6RbofcYXsumSSubBVHBPQl9Cg5fue5BdPIGzt9zb27b5SLzO2A9j-S94AOpFcXNw=w1200",
       src5:
          "https://lh3.googleusercontent.com/1yXUi5qQ9zAS0gvU8N5oAuQf5htY3Zy23f9tpdZFCGv0fzB68I-ANpvpVHPV0P2uo4cOO62F5oD7dvT7yLKAqYRvHcpP5s9wLVTzd-pXO_gMmpySOhcqU7qOwP6H9_52oXw_H98uHg=w1200",  
      srcList: [
          'https://lh3.googleusercontent.com/-4u8K2oQPGJrcH-lTkhfgX2D4aZVqJwHE76eY7qX96vOT18pKMOEUFcq1vbrkVJtUILf63Ah4hiI22tw1T1exMMF-CSKZ91ak0CEgKSp5SzCIOwGqMKNd_s7EtBeJz50lW3tTAhl-g=w2400',

        ],
      srcList1: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
        ],
    };
  },
});
</script>

<style>
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
