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
            <el-image :src="src2" :preview-src-list="srcList2"></el-image>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-image :src="src3" :preview-src-list="srcList3"></el-image>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        
        <el-col :span="6"> 
            <el-image :src="src4" :preview-src-list="srcList4"></el-image>
        </el-col>
        
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-image :src="src5" :preview-src-list="srcList5"></el-image>
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
          'https://lh3.googleusercontent.com/lym6CjGJri7Nu25v-MLB9TqNu2RltPWqI9TzBViNnND0fIdUCTqgtLfY1otUaINQcvEAKTtV1HtHuqZLtLLo5dUwXqQuiUvaB4K1L13ObAFPcWtpuhMs4uCYibz8e9le8VqJRY75Dw=w1800',
          'https://lh3.googleusercontent.com/TO6B2n_MLcBv1ruwyW7e3fJqNXqATP3MX2hCIahW3w-5isdA_lx7woRRCAjCDQCr_aD_hp_n-GWqkQ-EISWYSX4mDleb6R6v0lEGWt2aQM2ARl38P8A2paKTyb5sir2hwBhuE_1tGg=w1800',
          'https://lh3.googleusercontent.com/mtE4qgwm5RJWMOY4qVVyOvysBRNNq8wssfZwyn3NwQiCqAAbvMiKXtNe23YxEqnYTq2Yz6qz8jtf0ZuSzeDr_s2-c5TxVrH4uurcvQlCW9X-N4dKcq-zjoyGu_-vYM3elMU4zYREBQ=w1800',
        ],
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
