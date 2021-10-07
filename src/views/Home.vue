<template>
<el-container style="height: 620px">

  <el-container>

    <el-main>
      <el-row :gutter="20">
        
        
        <el-col :span="6">
            <div class="item1_content">
            <router-link to="/item1">
            <el-image :src="src"></el-image>
            </router-link>
            </div>
        </el-col>
        
        
        <el-col :span="6">
          <div class="item2_content">
            <router-link to="/item2">
            <el-image :src="src1"></el-image>
            </router-link>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="item2_content">
            <router-link to="/item3">
            <el-image :src="src2" :preview-src-list="srcList2"></el-image>
            </router-link>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="item3_content">
            <el-image :src="src3" :preview-src-list="srcList3"></el-image>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        
        <el-col :span="6">
          <div class="item2_content"> 
            <el-image :src="src4" :preview-src-list="srcList4"></el-image>
          </div>
        </el-col>
        
        <el-col :span="6">
          <div class="item2_content">
            <el-image :src="src5" :preview-src-list="srcList5"></el-image>
          </div>
        </el-col>
      </el-row>
    </el-main>

  </el-container>
</el-container>
<footer></footer>
</template>


<script>
import { defineComponent } from 'vue'
import { ElContainer,ElMain,ElImage} from 'element-plus'
import { ElRow,ElCol } from 'element-plus'
import '/node_modules/element-plus/dist/index.css'

export default defineComponent({
  name: "ElementPlus",
  components: {
    ElContainer,ElMain,ElImage,
    ElCol,ElRow
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
      srcList2: [
          'https://lh3.googleusercontent.com/GgzRXsbqBkQMLyVL0EppZtGunL8zvo3NTsAv8AJW749L2x9FVwHWRE4tf5W3cHLwU47mctSwIi-uviiyAZIplOscYVOeJ12s7LrenEBEXJoXidO5kn47vOHniGq2XyZ_t_WFJ38pVA=w1800',
          'https://lh3.googleusercontent.com/T-umkREC2_u2mPpi8ukcmDr9osHDYboeuAM0H7gF18ll050CwL9byau7BAbSf2Sp7pEHtb3tPOXCf4hLizkh_lMWMu50YjZstvkkAaK-N255gF7VZfeQESCh8yuToTsWo5CzyFG38g=w1800',
          'https://lh3.googleusercontent.com/x6M6bmx94JPYa6ApDICxpUF1Dh-0uVEpGzvNO1TaySY8wDCtQNmRGA0S9NDQZ9ZdLRv_JMuquGQtC-o03Vi87AxuwBGMOZYN9DSpd97HaeuOUwAKRKA9tibBX26oQBv1AMr-spcjCw=w1800',
        ],
      srcList3: [
          'https://lh3.googleusercontent.com/q8cezu9ev-OEYx5_kkXk-FIRGk1-4FDwLUej8GrNqlSMC5RmSfB3oHc8nAshFtB2g2TR3bJO19OPms04kh7ICQFJQwqZiDMGd6_TsnpqsRRtqcrYjJKPAD8U6vwH7slTniZLm9bWzg=w1800',
        ],
      srcList4: [
          'https://lh3.googleusercontent.com/-SGQLvgNJUssHLvu6jsdc61Hjvq_rVoxbz2M-LPyNzkQx_7ECmrWf-RlcLxXJkqK3C68Hksu7kAYcYUKX4zDDUeVXV9uczSjas4kWKbaemQQ1pm-bpt7PS5f6KV6nnwoQlMcptcATQ=w1800',
        ],
      srcList5: [
          'https://lh3.googleusercontent.com/ZawFo9lkazdxZgIgCI5hntE4uOZvjJ83qeb6hZgfxQMXOyBdIA8t6t3ufpFgIj3z4Ba9Qck27MeNPCnSvxZnx694qXKvwXIyvGtdBcNCHT4e3An8yIS5wyzXEH0jP_EWQcmNFXIpuA=w1800',
          'https://lh3.googleusercontent.com/CvMLkDJUVrv9lO7Rd-KGbN1t3H6e0nb64tdt3BN80RAuBi9vFyXlq_tg7FYaVvqV6SDzsMY4z9UEkj7358zXz0H-RiCIwVB8zvmLauGN_a9onbQZsmVD2afTlLTv7e6gvr6b68AMGQ=w1800',
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
  .item1_content:hover{
    opacity:0.6;
    transition: all .2s ease-in-out;
  }
  .item2_content:hover{
    opacity:0.6;
    transition: all .2s ease-in-out;
  }

  @media screen and (min-width:300px) and (max-width:800px){
  
  .item1_content, .item2_content, .item3_content{
    width: 100%;
    height: auto;

  }
  
}
</style>
