<template>
<el-container style="height: 620px">
  <el-main>
  <p class="item-title">VIDEO CHAT UI DESIGN..</p>
    <img class="vc-1" src="../assets/videochat/vc-mockup-01.jpg" alt="">
    <p class="item-subtitle">獨立視訊軟體 UI設計</p>
    <div class="item-content item-c-content">
      <div class="item-left-box">
        <p>透過與客戶、RD開會後取得客戶之視訊系統需求，設計出簡易的Wireframe與RD討論操作步驟與流程、確認使用元素以及風格。而後即開始製作mockup與prototype，最後與老闆、客戶和RD做收尾確認。</p>
      </div>
      <div class="item-right-box">
        <p>Illustrator , PhotoShop <br> Sketch , Marvel (Prototype Tool) <br> Git , Github</p>
      </div>
    </div>
      <div class="item-mobile-box">
        <p>Illustrator , PhotoShop <br> Sketch , Marvel (Prototype Tool) <br> Git , Github</p>
      </div>
      <div class="item-content">
        <img class="vc-3" src="../assets/videochat/vc-mockup-03.jpg" alt="">
      </div>

      <div class="item-content item-c-content">
        <div class="item-left-box">
          <img class="vc-4" src="../assets/videochat/vc-demo-04.jpg" alt="">
        </div>
        <div class="item-right-box">
          <img class="vc-4" src="../assets/videochat/vc-demo-05.jpg" alt="">
        </div>
      </div>
      <div class="item-mobile-box">
        <img class="vc-4" src="../assets/videochat/vc-demo-05.jpg" alt="">
      </div>
      <div class="item-content">
        <img class="vc-5" src="../assets/videochat/vc-demo-06.jpg" alt="">
      </div>
      <div class="item-content item-c-content"></div>
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

.vc-1{
  width: 80%;
  height: auto;

}
.vc-2{
  width: 70%;
  height: auto;
}

.vc-3{
  width: 100%;
  height: auto;
}

.vc-4{
  width:90%;
  box-shadow: 5px 5px 20px #cccccc;
  margin-bottom: 5%;
}

.vc-5{
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