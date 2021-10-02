<template>
<el-container style="height: 620px">
  <el-aside width="200px">
    <div class="aside_avatar">
      <el-avatar :size="70">
          <img alt="" src="./assets/avatar1.png"/>
      </el-avatar>
      <h4>stnyu</h4>
          <div class="icon_social">
            <a class="fb" href="https://www.facebook.com/yu.stone.3/" style="margin-right:20px; color: inherit">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a class="ig" href="https://www.instagram.com/stnyu/" style="color: inherit;">
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
import { ElHeader,ElAside,ElAvatar,ElMain,ElContainer } from 'element-plus'

export default ({
  components: {
    ElHeader,ElAside,ElAvatar,ElMain,ElContainer
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>
