<template>
  <aside>
    <div class='logo'>
      <img alt='Linect Logo' src='/icons/logo.png'>
      <span>Linect</span>
    </div>
    <div class='options'>
      <NuxtLink to='/' class='{ active: isDashboardActive }'>
        <img alt='Dashboard' src='/icons/dashboard.svg'>
        <span>Dashboard</span>
      </NuxtLink>
      <NuxtLink to='/application' class='{ active: isApplicationActive }'>
        <img alt='Applications' src='/icons/applications.svg'>
        <span>Applications</span>
      </NuxtLink>
      <NuxtLink to='/request' class='{ active: isRequestActive }'>
        <img alt='Requests' src='/icons/requests.svg'>
        <span>Requests</span>
      </NuxtLink>
      <NuxtLink to='/discussion' class='{ active: isDiscussionActive }'>
        <img alt='Discussion' src='/icons/discussion.svg'>
        <span>Discussion</span>
      </NuxtLink>
    </div>
    <hr class='dividing-line'>
    <div class='align-bottom'>
      <hr class='dividing-line'>
      <div class='links'>
        <NuxtLink to='/documentation'>
          <img alt='Documentation' src='/icons/documentation.svg'>
        </NuxtLink>
        <NuxtLink href='/about'>
          <img alt='About' src='/icons/info.svg'>
        </NuxtLink>
        <NuxtLink to='/support'>
          <img alt='Support' src='/icons/support.svg'>
        </NuxtLink>
        <NuxtLink to='/share'>
          <img alt='Share' src='/icons/share.svg'>
        </NuxtLink>
        <a href='mailto:linect@linect.org' target='_blank'>
          <img alt='Contact' src='/icons/contact.svg'>
        </a>
      </div>
      <div class='copyright'>
        <p>Linect © 2023. All right reserved</p>
      </div>
    </div>
  </aside>`
</template>

<script setup lang='ts'>
const route = useRoute()
const isDashboardActive = computed(() => route.path === '/')
const isApplicationActive = computed(() => route.path === '/application')
const isRequestActive = computed(() => route.path === '/request')
const isDiscussionActive = computed(() => route.path === '/discussion')
</script>

<style lang='scss' scoped>
aside {
  height: 100%;
  width: 21.3%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $background;
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
  color: $text;
  padding: 1vw 0;
  margin-right: 2.2vw;
  margin-bottom: 0.5vw;
}

.options a:hover, .options a.router-link-active {
  color: $secondary;
}

.options a img {
  height: 1.7vw;
  width: 1.7vw;
  margin-right: 1.1vw;
  margin-left: 1.6vw;
}

.options a:hover img, .options a.router-link-active img {
  filter: invert(45%) sepia(11%) saturate(1812%) hue-rotate(50deg) brightness(89%) contrast(84%);
}

.options a span {
  font-size: 17px;
  font-weight: 350;
}

.options a.router-link-active {
  background-color: rgba(207, 238, 182, 44%);
  border-radius: 5px;
}

.options a.router-link-active::after {
  content: '';
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
}

.links a {
  text-decoration: none;
}

.links a:hover {
  filter: invert(45%) sepia(11%) saturate(1812%) hue-rotate(50deg) brightness(89%) contrast(84%);
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
</style>
