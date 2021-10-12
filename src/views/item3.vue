<template>
<el-container style="height: 620px">
  <el-main>
  <p class="item-title">Logo Redesign..</p>
    <img class="cis-1" src="../assets/card.png" alt="">
    <p class="item-subtitle">Chiayi City Government Logo Redesign</p>
    <div class="item-content item-c-content">
      <div class="item-left-box">
        <p>由朱嘉樺老師指導，於課堂完成的CIS重製作品。身為嘉義的在地子民，有感嘉義縣因阿里山觀光鼎盛的緣故，而有許多標誌重新設計的契機。反觀嘉義市有較少的設計提案，因此想為嘉義市提出一個新的點子。此次設計根據北門車站所展現出的形象，為嘉義市重新打造了一個LOGO。
        </p>
      </div>
      <div class="item-right-box">
        <img class="cis-2" src="../assets/cis/logotype@3x.png" alt="">
      </div>
    </div>
      <div class="item-mobile-box">
        <img class="cis-2" src="../assets/cis/logotype@3x.png" alt="">
      </div>
      <div class="item-content">
        <img class="cis-3" src="../assets/cis/grid@3x.png" alt="">
      </div>
      <div class="item-content">
        <img class="cis-5" src="../assets/cis/color-p.jpg" alt="">
      </div>
      <div class="item-content item-c-content">
        <div class="item-left-box">
          <img class="cis-4" src="../assets/cis/card-front@3x.png" alt="">
        </div>
        <div class="item-right-box">
          <img class="cis-4" src="../assets/cis/card-back@3x.png" alt="">
        </div>
      </div>
      <div class="item-mobile-box">
        <img class="cis-4" src="../assets/cis/card-back@3x.png" alt="">
      </div>
      <div class="item-content">
        <img class="cis-5" src="../assets/cis/compare.png" alt="">
      </div>
      <div class="item-content"></div>
  </el-main>
</el-container>
<footer></footer>
</template>


<script>
import { defineComponent } from 'vue'
import '/node_modules/element-plus/dist/index.css'
import { ElContainer,ElMain} from 'element-plus'

export default defineComponent({
  name: "ElementPlus",
  components: {
     ElContainer,ElMain
  },
  data() {
    return {
    };
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

.cis-1{
  width: 100%;
  height: auto;

}
.cis-2{
  width: 100%;
  height: auto;
}

.cis-3{
  width: 100%;
  height: auto;
}

.cis-4{
  width:90%;
  box-shadow: 5px 5px 20px #cccccc;
}

.cis-5{
  width: 90%;
  height: auto;
}
.item-title{
  font-family: 'Gill Sans', 'Noto Sans TC', sans-serif;
  font-size: 3rem;
  font-weight: 700;
}
.item-subtitle{
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 2px;

}
.item-content{
  width: 100%;
  margin-top: 5%;
}
.item-left-box{
  width: 45%;
  float:left;
  overflow: hidden;
  margin: auto;
}
.item-right-box{
  width: 45%;
  float:right;
  overflow: hidden;
  margin: auto;
}
.item-c-content{
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 15%;
  display: flex;
  align-items: center;
  margin-top: 150px;

}
.item-mobile-box{
    display: none;
    max-width: 0;
    overflow: hidden;
  }

  @media screen and (min-width:300px) and (max-width:800px){
  
  .item-right-box{
    max-width: 0;
    overflow: hidden;
  }

  .item-left-box{
    width: 100%;
    overflow: hidden;
  }
  .item-mobile-box{
    display: block;
    max-width: 100%;
    overflow: hidden;
  }
}
</style>