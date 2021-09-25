<template>
<el-container style="height: 650px">

  <el-container>

    <el-main style="text-align: center;">
    <el-row  style="text-align: center;">
<img src="../assets/avatar1.png" alt="" style="width:30%; margin-left:35%">
<p style="margin-left:18%; margin-right:18%; margin-top:3%; font-size:11px; line-height:25px">嗨，大家好，我是晏。2021年從研究所畢業成為社會新鮮人，很希望能夠成為一位UI Designer，於是任性的跑到設計研究所進修。不過求職之路漫漫，學海之路更是慢慢 (゜∀。) 
從資管畢業後，除了寫寫一些簡單的網站，也熱衷於嘗試各類型的框架。透過研究所的幫助下，在設計的方面，也透過學校老師以及實習的方式學習到許多以前從未想過的內容。對跨領域的人來說，似乎總在體制下漂泊，不過我依舊熱衷於做任何自己感到快樂的事情。d(`･∀･)b 例如打電動
</p>
<p style="margin-left:18%; margin-right:18%; font-size:11px; line-height:25px">我正在尋找一個職位是在電腦軟體相關或是平面設計相關團隊擔任UI設計或是前端工程，短期目標是發揮目前所長，快速融入並投身各項專案。長期目標希望參與更多的用戶研究以了解從未碰過的領域UX。<br><b>#章魚餐廳的服務生 #謹慎的收藏家 #銅牌遊蕩者</b></p>

      
      </el-row>
    </el-main>

  </el-container>
</el-container>
</template>


<script>
import { defineComponent } from 'vue'
import { ElContainer,ElMain,ElRow } from 'element-plus'
import '/node_modules/element-plus/dist/index.css'

export default defineComponent({
  name: "ElementPlus",
  components: {
    ElContainer,ElMain,ElRow,
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
