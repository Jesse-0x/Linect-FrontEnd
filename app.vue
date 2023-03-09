<template>
  <NuxtLayout :name="layout">
    <NuxtPage/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { isMobile } = useDevice()
const layout = isMobile ? 'mobile' : 'default'
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/icons/logo.png'
    }
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Linect` : 'Linect'
  }
})
</script>
