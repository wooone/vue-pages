<template>
<el-container style="height: 590px">
  <el-main>
  <p class="item-title">Web Design..</p>
    <img class="exhibition-web-1" src="../assets/3.jpg" alt="">
    <p class="item-subtitle">A Website about online exhibition</p>
    <div class="item-content item-c-content">
      <div class="item-left-box">
        <p>以主視覺為設計思路，規劃網站主色調，和委託人討論出User Story後，因網站特性關係就無花太多心力於Functional Map以及Flow Chart的規劃。寫出簡易的UI Flow後與合作夥伴討論合宜性。確認無誤後開始產製Mockup與Prototype，並且與夥伴使用React進行製作。</p>
      </div>
      <div class="item-right-box">
        <img class="exhibition-web-1" src="../assets/mobilemockup.jpg" alt="">
      </div>
    </div>
      <div class="item-mobile-box">
        <img class="exhibition-web-2" src="../assets/mobilemockup.jpg" alt="">
      </div>
      <div class="item-content">
        <img class="exhibition-web-3" src="../assets/mac-mockup.jpg" alt="">
      </div>
      <div class="item-content">
        <img class="exhibition-web-4" src="../assets/storemock.png" alt="">
      </div>
      <div class="item-content">
        <img class="exhibition-web-4" src="../assets/scenemockup.jpg" alt="">
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

.exhibition-web-1{
  width: 100%;
  height: auto;

}

.exhibition-web-2, .exhibition-web-3, .exhibition-web-4{
  width: 100%;
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