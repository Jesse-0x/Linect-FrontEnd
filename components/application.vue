<template>
  <div :class="props.color" class="background">
    <div class="title">
      <img :src="props.icon" alt="icon"/>
      <span>{{ props.title }}</span>
    </div>
    <div class="content">
      <p>{{ props.content }}</p>
    </div>
    <div class="align-bottom">
      <div class="align-left">
        <a href="#">
          <img alt="check" src="/application_icons/check.svg">
        </a>
        <a href="#">
          <img alt="document" src="/application_icons/document.svg">
        </a>
        <a href="#">
          <img alt="content" src="/application_icons/content.svg">
        </a>
      </div>
      <div class="align-right">
        <a href="#">
          <img alt="share" src="/application_icons/share.svg">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  icon: String,
  content: String,
  color: String
})
</script>

<style lang="scss" scoped>
.background {
  background-image: linear-gradient(134deg, rgba(212, 252, 121, 0.80) 0%, rgba(150, 230, 161, 0.80) 100%);
  box-shadow: 4px 5px 9px 0 rgba(0, 0, 0, 0.10);
  padding: 2vw 1.8vw;
  border-radius: 30px;
  width: 28%;
  height: 10vw;
  display: inline-block;
}

.background:last-child {
  margin-right: 0;
}

.yellow-green {
  background-image: linear-gradient(134deg, rgba(212, 252, 121, 0.80) 0%, rgba(150, 230, 161, 0.80) 100%);
}

.green-blue {
  background-image: linear-gradient(134deg, rgba(132, 250, 176, 0.80) 0%, rgba(143, 211, 244, 0.80) 100%);
}

.light-blue-purple {
  background-image: linear-gradient(134deg, rgba(137, 247, 254, 0.80) 0%, rgba(195, 205, 252, 0.80) 100%);
}

.dark-blue-purple {
  background-image: linear-gradient(134deg, rgba(142, 197, 252, 0.80) 0%, rgba(195, 205, 252, 0.80) 100%);
}

.purple-pink {
  background-image: linear-gradient(134deg, rgba(179, 201, 255, 0.80) 0%, rgba(245, 154, 157, 0.80) 100%);
}

.pink-red {
  background-image: linear-gradient(134deg, rgba(250, 167, 170, 0.80) 0%, rgba(250, 193, 167, 0.80) 100%);
}

.cyan-blue {
  background-image: linear-gradient(134deg, rgba(121, 252, 162, 0.80) 0%, rgba(121, 252, 219, 0.80) 100%);
}

.light-yellow-green {
  background-image: linear-gradient(134deg, rgba(217, 247, 168, 0.80) 0%, rgba(168, 247, 194, 0.80) 100%);
}

.title {
  display: flex;
  align-items: center;
  margin-bottom: 0.9vw;
  color: black;
}

.title img {
  height: 2.5vw;
  width: 2.5vw;
  margin-right: 0.5vw;
}

.title span {
  font-size: 1.7vw;
}

.content {
  font-size: 1.2vw;
  color: black;
}

.content p {
  margin: 0;
}

.align-bottom {
  position: relative;
  top: 40%;
  display: flex;
}

.align-left {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.align-left a {
  margin-right: 1.5vw;
}
</style>
