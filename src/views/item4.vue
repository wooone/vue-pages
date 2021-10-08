<template>
<el-container style="height: 620px">
  <el-main>
  <p class="item-title">WORDPRESS Website..</p>
    <img class="xiaoli-1" src="../assets/xiaoli/xiaoli-banner.jpg" alt="">
    <p class="item-subtitle">USR 計畫 X 宵遙遊 </p>
    <div class="item-content item-c-content">
      <div class="item-left-box">
        <p>離都市最近的桃花源宵裡。以水滴與石頭為元素，代表宵裡的特色「湧泉」與「壘石」，當地除了擁有自然資源以外，還蘊含豐富的人文特色</p>
        <p style="color:darkgray; font-weight:300; letter-spacing:2px">WORDPRESS | HTML | CSS | JS | Elementor</p>
      </div>
      <div class="item-right-box">
        <img class="xiaoli-2" src="../assets/xiaoli/logo.png" alt="">
      </div>
    </div>
      <div class="item-mobile-box">
        <img class="xiaoli-2" src="../assets/xiaoli/logo.png" alt="">
      </div>

      <div class="item-content">
        <img class="xiaoli-3" src="../assets/xiaoli/xiaoli-mockup-02.jpg" alt="">
      </div>
      <div class="item-content item-space">
        <div class="item-left-box">
          <img class="xiaoli-4" src="../assets/xiaoli/xiaoli-mockup-04.jpg" alt="">
        </div>
        <div class="item-right-box">
          <img class="xiaoli-4" src="../assets/xiaoli/xiaoli-mockup-03.jpg" alt="">
        </div>
      </div>
      <div class="item-mobile-box">
        <img class="xiaoli-4" src="../assets/xiaoli/xiaoli-mockup-03.jpg" alt="">
      </div>
      <div class="item-content">
        <a href="https://usrcycu.com">
        <button class="xiaoli-btn" data-hover="GO TO USR!" style="margin-top:10%"><div>LEARN MORE</div></button></a>
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

.xiaoli-1{
  width: 100%;
  height: auto;

}
.xiaoli-2{
  width: 100%;
  height: auto;
}

.xiaoli-3{
  width: 100%;
  height: auto;
}

.xiaoli-4{
  width:100%;
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
.item-space{
  display: flex;
  margin: 0%;
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

.xiaoli-btn, .xiaoli-btn:before, .xiaoli-btn:after{
  box-sizing: border-box;
  padding: 0; margin: 0;
  font: 300 1em/1.5 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  text-decoration: none;
  color: #111;
}
.xiaoli-btn:hover{cursor: pointer;} 
.xiaoli-btn{
  background: transparent; outline: none;
  position: relative;
  border: 2px solid #111;
  padding: 15px 50px;
  overflow: hidden;
}

/*button:before (attr data-hover)*/
.xiaoli-btn:hover:before{opacity: 1; transform: translate(0,0);}
.xiaoli-btn:before{
  content: attr(data-hover);
  position: absolute;
  top: 1.1em; left: 0;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: .8em;
  opacity: 0;
  transform: translate(-100%,0);
  transition: all .3s ease-in-out;
}
/*button div (button text before hover)*/
.xiaoli-btn:hover div{opacity: 0; transform: translate(100%,0)}
.xiaoli-btn div{
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 800;
    font-size: .8em;
    transition: all .3s ease-in-out;
}


</style>