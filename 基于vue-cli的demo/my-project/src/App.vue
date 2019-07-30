<template>
  <div id="app">
    <div id="header">
      <Header></Header>
      <Nav></Nav>
      <Search></Search>
    </div>

    <div id="main">
      <Panel v-if="currentIdx===0"></Panel>
      <div v-if="currentIdx===1">我是通讯录</div>
      <div v-else-if="currentIdx===2">我是发现</div>
      <div v-else-if="currentIdx===3">我是我</div>
    </div>

    <Footer @change="change"></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Panel from "./components/Panel";
import Footer from "./components/Footer";
import Search from "./components/Search";

export default {
  name: "app",
  data() {
    return {
      currentIdx: 0
    };
  },
  components: {
    Header,
    Nav,
    Panel,
    Footer,
    Search
  },
  methods: {
    change(msg) {
      this.currentIdx = msg;
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}
#main {
  flex: 1;
  overflow-x: hidden;
}
#header {
}
Footer {
}
</style>
