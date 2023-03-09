<template>
  <div class="filter">
    <p>Filter</p>
    <form>
      <fieldset>
        <legend>Test</legend>
        <label for="test">
          <input type="checkbox" id="test">
          <span>Test</span>
        </label>
        <label for="test1">
          <input type="checkbox" id="test1">
          <span>Test1</span>
        </label>
      </fieldset>
      <fieldset>
        <legend>Test b</legend>
        <label for="test2">
          <input type="checkbox" id="test2">
          <span>Test</span>
        </label>
        <label for="test3">
          <input type="checkbox" id="test3">
          <span>Test1</span>
        </label>
      </fieldset>
    </form>
  </div>
  <div class="list">
    <div class="result-sort">
      <p>Result</p>
      <select name="sort" id="sort">
        <option value="suggested" selected>Suggested</option>
        <option value="recent">Recent</option>
      </select>
    </div>
    <div class="main-down">
      <div class="result" v-for="result in results">
        <img :src="result.icon" :alt="result.name + ' icon'">
        <div class="result-info">
          <div class="title">
            <span class="name">{{result.name}}</span>
            <span class="version">{{result.version}}</span>
            <span class="downloads">{{result.downloads}}</span>
            <span class="rating">{{result.rating}}</span>
          </div>
          <div class="description">
            <p>Created time: {{result.created}}</p>
            <p>{{result.description}}</p>
          </div>
          <div class="tags">
            <span class="tag" v-for="tag in result.tags">{{tag}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {applicationDto} from "~/shared/dtos";

useHead({
  title: 'Application'
})

const results: applicationDto[] = []
const test: applicationDto = new applicationDto()
test.id = "fuck"
test.name = 'test'
test.description = 'This is a test application.'
test.icon = 'https://d1q6f0aelx0por.cloudfront.net/product-logos/library-busybox-logo.png'
test.type = 'test'
test.author = 'test'
test.author_url = 'test'
test.author_icon = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
test.version = 'test'
test.color = 'test'
test.tags = ['test1', 'test2']
test.screenshots = ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png']
test.created = new Date().toString()
test.downloads = 114514
test.rating = 3
test.rating_count = 114514
test.license = 'test'
test.changelog = 'test'
results.push(test)
const test1: applicationDto = new applicationDto()
test1.id = "fuck"
test1.name = 'test'
test1.description = 'This is a test application.'
test1.icon = 'https://d1q6f0aelx0por.cloudfront.net/product-logos/library-alpine-logo.png'
test1.type = 'test'
test1.author = 'test'
test1.author_url = 'test'
test1.author_icon = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
test1.version = 'test'
test1.color = 'test'
test1.tags = ['test1', 'test2']
test1.screenshots = ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png']
test1.created = new Date().toString()
test1.downloads = 114514
test1.rating = 3
test1.rating_count = 114514
test1.license = 'test'
test1.changelog = 'test'
results.push(test1)
</script>

<style scoped lang="scss">
.filter {
  width: 20%;
  height: 100%;
  float: left;
  padding: 1vw
}

.filter p {
  font-size: 1.3vw;
  margin-bottom: 0.5vw;
}

fieldset {
  margin-bottom: 1vw;
}

fieldset legend {
  font-size: 1.2vw;
  margin-bottom: 0.5vw;
}

fieldset label {
  display: flex;
  align-items: center;
  font-size: 1.1vw;
  margin-bottom: 0.5vw;
}

fieldset label input[type=checkbox] {
  margin-right: 0.5vw;
  border-radius: 4px;
  width: 1.2vw;
  height: 1.2vw;
}

.list {
  width: 75%;
  height: 100%;
  padding-left: 25%;
}

.result-sort {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
}

.result-sort p {
  font-size: 1.6vw;
  margin-bottom: 0;
}

.result-sort select {
  font-size: 1.1vw;
  padding: 0.5vw;
  margin-top: 1.5vw;
}

.main-down {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.result {
  display: flex;
  padding: 1vw;
  border: 1px solid #E1E2E6;
  border-radius: 0.5vw;
  margin-bottom: 1vw;
}

.result:last-child {
  margin-bottom: 0;
}

.result:hover {
  transition: border-color 0.2s ease-in-out;
}

.result img {
  width: 4vw;
  height: 4vw;
  margin-right: 1vw;
}

.result-info {
  width: 100%;
  height: 100%;
}

.title {
  display: flex;
  align-items: center;
  margin-bottom: 1vw;
}

.title .name {
  font-size: 1.5vw;
  margin-right: 1vw;
}

.title .version {
  font-size: 1.2vw;
  margin-right: 1vw;
}

.title .downloads {
  font-size: 1.2vw;
  margin-right: 1vw;
}

.title .rating {
  font-size: 1.2vw;
  margin-right: 1vw;
}

.description {
  font-size: 1.2vw;
  margin-bottom: 1vw;
}

.tags {
  display: flex;
  align-items: center;
  margin-bottom: 0.5vw;
}

.tags .tag {
  font-size: 1.1vw;
  margin-right: 0.5vw;
  padding: 0.2vw 0.5vw;
  border-radius: 0.5vw;
  background-color: #e0e0e0;
}
</style>