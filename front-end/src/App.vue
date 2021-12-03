<template>
  <div id="app">
    <div class="header-container">
      <img src="/images/logo_light.svg" width="300px">
      <div class="links">
        <router-link to="/" exact-active-class="active">
          <button>Home</button>
        </router-link>
        <router-link to="/rotations" exact-active-class="active">
          <button>Rotations</button>
        </router-link>
        <router-link to="/assignments" exact-active-class="active">
          <button>Asignments</button>
        </router-link>
        <router-link to="/schedules" exact-active-class="active">
          <button>Schedules</button>
        </router-link>
      </div>
    </div>

    <div class="content-container">
      <router-view/>
    </div>

    <div class="footer-container">
      <div class="links">
        <a href="https://github.com/qfrewin/scheduler"><button>GitHub</button></a>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  border: 0px;
  box-sizing: border-box;
}

.active {
  background-color: #a9e7e5;
}

.content-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: auto;
  width: 100%;
  background-color: #0abab4;
  padding: 10px 50px;
  flex-wrap: wrap;
  border-bottom: 1px solid #2c3e50;
  color: #2c3e50;
}

.links {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.links
button {
  padding: 20px;
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
}
.header-container
button {
  color: #737373;
}

.footer-container
button {
  color: #daf5f4;
}

.header-container
button:hover {
  background-color: #daf5f4;
}

.footer-container
button:hover {
  background-color: #0abab4;
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: #356e6c;
  padding: 10px 50px;
  border-top: 2px #2c3e50 solid;
}
</style>
