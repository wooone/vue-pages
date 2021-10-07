<template>
<el-container style="height: 620px">
  <el-aside width="200px">
    <div class="aside_avatar" style="margin-top:100px">
      <el-avatar :size="70">
          <img alt="" src="./assets/avatar1.png"/>
      </el-avatar>
      <h4 class="avatar_name">stnyu</h4>
          <div class="icon_social">
            <a class="icon_social_fb" href="https://www.facebook.com/yu.stone.3/" style="margin-right:20px; color: inherit">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a class="icon_social_ig" href="https://www.instagram.com/stnyu/" style="color: inherit;">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </div>
    </div>
  </el-aside>

  <el-container>
    <el-header>
      <div id="nav" style="text-align: right; font-size: 12px">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/pdf">PDF</router-link>
      </div>
      <router-view/>
    </el-header>

    <el-main>
    </el-main>

  </el-container>
</el-container>
</template>

<script>
import { ElHeader,ElAside,ElAvatar,ElMain,ElContainer} from 'element-plus'

export default ({
  components: {
    ElHeader,ElAside,ElAvatar,ElMain,ElContainer
  },
})
</script>


<style>
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.el-aside {
    color: inherit;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 13px;
  }
.icon_social{
    text-align: center;
    padding: 0;
    margin-top: 400px;
  }
.icon_social_fb:hover{
  opacity: 0.5;
}
.icon_social_ig:hover{
  opacity: 0.5;
}
.avatar_name:hover{
  color: darkgrey;
}
.footer-title{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-top: 5%;
  margin-left: 5%;
  text-align: left;
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

@media screen and (min-width:300px) and (max-width:800px){

.el-aside{
    max-width: 0;
    overflow: hidden;
}
  
}
</style>
