<template>
  <div class="search-bar">
    <div class="search-icon">
      <img alt="Search" src="/icons/search.svg">
    </div>
    <input type="text">
    <div class="setting">
      <img alt="Setting" src="/icons/setting.svg">
    </div>
    <div class="history">
      <img alt="History" src="/icons/history.svg">
    </div>
    <div class="message">
      <img alt="Message" src="/icons/message.svg">
    </div>
    <div class="user">
      <img alt="User" src="/icons/user.svg">
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

.search-bar .history:hover, .search-bar .message:hover, .search-bar .setting:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
  transform: scale(1.05);
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
</style>
