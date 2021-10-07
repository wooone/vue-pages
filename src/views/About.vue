<template>
<el-container style="height: 620px">

    <el-main style="text-align: center;">
      <div class="about-content">
        <p class="about-title">Yan-Yu Wang</p>
          <div class="left-box">
            <p class="about-subtitle">OBJECTIVE</p>
            <p class="about-object">
              Highly motivated commercial design graduate looking to learn new skills and grow professionally, also enthusiastic about interactive art and technology. Want to find a company that I can grow with them.
            </p>
            <p class="about-c-object">我正在尋找一個職位是在電腦軟體相關或是平面設計相關團隊擔任UI設計或是前端工程，短期目標是發揮目前所長，快速融入並投身各項專案。長期目標希望參與更多的用戶研究以了解從未碰過的領域UX。</p>
            <p class="about-subtitle">SKILLS</p>
            <p class="about-skills">HTML, CSS, Sketch, JavaScript, Vue.js, illustrator, Node.js, Git</p>
            <p>123</p>
          </div>
          <div class="right-box">
            <p class="about-subtitle">EDUCATION</p>
              <p class="about-object">
              Master of Commercial Design / Bachelor of Information Management | <a href="https://goo.gl/maps/Hd7vWiC2kF8BEi5o8" class="link-school">Chung Yuan Christian University</a>
              </p>
              <p class="about-edu-school">•  Relevant Coursework: Transmedia Design, Graphic Design, Typography, Consumer Psychology</p>
              <p class="about-edu-school">•  Relevant Coursework: Java, C#, Database, Multimedia Programming, Data Structures</p>
              <p class="about-subtitle"></p>

              <p class="about-subtitle">CONTACT</p>
              <p class="about-object">
                <a class="icon_social_fb" href="https://www.facebook.com/yu.stone.3/" style="margin-right:20px; color: inherit">
                <font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                <a class="icon_social_ig" href="https://www.instagram.com/stnyu/" style="color: inherit;">
                <font-awesome-icon :icon="['fab', 'instagram']" /></a>
              </p>
          </div>
      </div>
    </el-main>
</el-container>
</template>



<script>
import { defineComponent } from 'vue'
import { ElContainer,ElMain } from 'element-plus'
import '/node_modules/element-plus/dist/index.css'

export default defineComponent({
  name: "ElementPlus",
  components: {
    ElContainer,ElMain,
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
  .about-title{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 3em;
    font-weight: 600;
  }
  .about-content{
    width:100%;
    margin: auto;
  }
  .left-box{
    width: 50%;
    float:left;
    overflow: hidden;
    margin: auto;
  }
  .right-box{
    width: 50%;
    float:right;
    overflow: hidden;
    margin: auto;
  }
  .about-object{
    margin-left:5%; 
    margin-right:5%; 
    font-size:16px; 
    font-weight: 500;
    line-height:25px;
  }
  .about-c-object{
    margin-left:5%; 
    margin-right:5%; 
    font-size:11px; 
    line-height:25px
  }
  .about-subtitle{
    font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    font-size: 2em;
    font-weight: 600;
  }
  .about-skills{
    font-size: 16px;
    font-weight: 400;
  }

  .about-edu-school{
    margin-left:10%; 
    margin-right:10%; 
    font-size: 16px;
    font-weight: 500;
    line-height:25px;
  }

  .link-school{
    color: gray;
    text-decoration: none;
  }

  .link-school:hover{
    color: rgb(228, 228, 228);
  }


  @media screen and (min-width:300px) and (max-width:800px){

  .about-subtitle{
    font-size: 12px;
    font-weight: 600;
  }
  .about-object{
    margin: 0%; 
    font-size:12px; 
    line-height:16px;
  }
  .about-skills{
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  .about-c-object{
    margin-top: 5%; 
    font-size:12px; 
    line-height:16px;
  }
  .about-edu-school{
    margin-top: 5%; 
    font-size:12px; 
    line-height:16px;
  }
}
</style>