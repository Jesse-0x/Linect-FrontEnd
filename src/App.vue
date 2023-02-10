<script setup>
const test = [
  "Nothing is there on this page right now Nothing is there on this page right now..", "If you see this should be long but not very long each boxes", "means that", "there is a problem currently and very very super bad right now ", "with this website", "QwQ.... ……*･゜ﾟ･*:.｡..｡.:*･'(*ﾟ▽ﾟ*)'･*:.｡. .｡.:*･゜ﾟ･*", "Nothing is there on this page right now...", "If you see this", "means that", "there is a problem currently and very very super bad right now ", "with this website", "QwQ", "Nothing is there", "If you see this", "means that", "there is a problem", "with this website", "QwQ", "Nothing is there on this page right now...", "If you see this", "means that", "there is a problem currently and very very super bad right now ", "with this website", "QwQ",
]
</script>

<template>
  <aside>
    <div class="logo">
      <img src="./assets/icons/logo.png" alt="Linect Logo">
      <span>Linect</span>
    </div>
    <div class="options">
      <a href="#" class="active">
        <img src="./assets/icons/dashboard.svg" alt="Dashboard">
        <span>Dashboard</span>
      </a>
      <a href="#">
        <img src="./assets/icons/applications.svg" alt="Applications">
        <span>Applications</span>
      </a>
      <a href="#">
        <img src="./assets/icons/requests.svg" alt="Requests">
        <span>Requests</span>
      </a>
      <a href="#">
        <img src="./assets/icons/discussion.svg" alt="Discussion">
        <span>Discussion</span>
      </a>
    </div>
    <hr class="dividing-line">
    <div class="align-bottom">
      <hr class="dividing-line">
      <div class="links">
        <a href="#">
          <img src="./assets/icons/documentation.svg" alt="Documentation">
        </a>
        <a href="#">
          <img src="./assets/icons/info.svg" alt="Information">
        </a>
        <a href="#">
          <img src="./assets/icons/support.svg" alt="Support">
        </a>
        <a href="#">
          <img src="./assets/icons/share.svg" alt="Share">
        </a>
        <a href="#">
          <img src="./assets/icons/contact.svg" alt="Contact">
        </a>
      </div>
      <div class="copyright">
        <p>Linect © 2023. All right reserved</p>
      </div>
    </div>
  </aside>
  <main>
    <div class="search-bar">
      <div class="search-icon">
        <img src="./assets/icons/search.svg" alt="Search">
      </div>
      <input type="text">
      <div class="setting">
        <img src="./assets/icons/setting.svg" alt="Setting">
      </div>
      <div class="history">
        <img src="./assets/icons/history.svg" alt="History">
      </div>
      <div class="message">
        <img src="./assets/icons/message.svg" alt="Message">
      </div>
      <div class="user">
        <img src="./assets/icons/user.svg" alt="User">
      </div>
    </div>
    <div class="main-context">
      <div class="content" v-for="t in test">
        <p>{{ t }}</p>
        <hr class="dividing-line">
      </div>
    </div>
  </main>
</template>

<style scoped>
aside {
  height: 100%;
  width: 21.3%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #FDFFFB;
}

aside div {
  font-size: 14px;
}

.logo {
  height: 7vw;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0 0 2vw;
}

.logo img {
  height: 4.1vw;
  width: 4.1vw;
}

.logo span {
  margin-left: 0.9vw;
  font-size: 36px;
  font-weight: 350;
}

.options {
  padding: 4.8% 0 4.3% 1.6vw;
}

.options a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #5C5C5C;
  padding: 1vw 0;
  margin-right: 2.2vw;
  margin-bottom: 0.5vw;
}

.options a:hover, .options a.active {
  color: #57763D;
}

.options a img {
  height: 1.7vw;
  width: 1.7vw;
  margin-right: 1.1vw;
  margin-left: 1.6vw;
}

.options a:hover img, .options a.active img {
  filter: invert(45%) sepia(11%) saturate(1812%) hue-rotate(50deg) brightness(89%) contrast(84%);
}

.options a span {
  font-size: 17px;
  font-weight: 350;
}

.options a.active {
  background-color: rgba(207, 238, 182, 44%);
  border-radius: 5px;
}

.options a.active::after {
  content: "";
  position: absolute;
  left: 20.9vw;
  display: inline-block;
  width: 0.8vh;
  height: 7%;
  background-color: rgba(111, 180, 0, 0.42);
  border-radius: 15px 0 0 15px;
}

.dividing-line {
  border-top: 2px solid rgba(85, 114, 49, 0.17);
}

aside .dividing-line {
  width: 16vw;
}

.align-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.links {
  padding: 0.7vw 2.2vw 0 2.2vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  fill: #24294F;
}

.links a {
  text-decoration: none;
  color: #24294F;
}

.copyright {
  padding: 1vw 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copyright p {
  margin: 0;
  padding: 0;
  font-size: 0.8vw;
  color: black;
}

main {
  margin-left: 20%;
  padding: 3.6vh 3vw 1vw 2.5vw;
}

.search-bar {
  height: 7.2vh;
  width: 74%;
  display: flex;
  top: 10px;
  position: fixed;
  right: 20px;
  flex-direction: row;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 1.5vw;
  box-shadow: 6px 10px 9px 2px rgba(0, 0, 0, 0.04);
  padding: 0 1vw;
}
.search-bar .search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.search-bar .search-icon img {
  height: 1.5vw;
  width: 1.5vw;
}

.search-bar .setting img, .search-bar .history img, .search-bar .message img {
  height: 1.4vw;
  width: 1.4vw;
}

.search-bar .user img {
  height: 2.3vw;
  width: 2.3vw;
}

.search-bar input {
  height: 3vw;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.5vw;
  font-weight: 100;
  color: black;
  background: rgba(255, 255, 255, 0);
  padding: 0;
  margin-left: 1vw;
}

.search-bar div {
  height: 2.5vw;
  width: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 1vw;
}

.search-bar div:first-child {
  margin-left: 0;
}

.main-context {
  height: 100%;
  width: 100%;
  margin-top: 4vw;
  background-color: white;
  border-radius: 1.5vw;
  box-shadow: 6px 10px 9px 2px rgba(0, 0, 0, 0.03);
  padding: 1vw;
}

.content:last-child .dividing-line {
  display: none;
}
</style>
