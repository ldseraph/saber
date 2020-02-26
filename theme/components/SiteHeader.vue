<template>
  <header class="relative flex items-stretch flex-wrap pt-20 pb-10">
    <saber-link class="flex-grow" :to="$localePath">
      <h1 class="title font-bold" v-if="this.$siteConfig.title" >{{ this.$siteConfig.title }}</h1>
    </saber-link>
    <nav class="mt-10">
      <ul>
        <li class="inline-block mx-3 font-bold" v-for="(item,index) in $themeConfig.nav" :key="index">
          <saber-link class="pb-1 link" active-class="active" :to="item.link">
            {{item.text}}
          </saber-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      nav: false
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  border-bottom: 2px solid #e7e9ee;
}

.title {
  font-size: 2.5rem;
  line-height: 5rem;
  transition: all 0.25s ease;
  font-family: 'Roboto Slab',Arial,sans-serif;
  &:hover {
    color: #2a2e2e;
  }
}

.link {
  transition: all 0.25s ease;
  &.active{
    border-bottom: 2px solid #e7e9ee;
  }
  &:hover {
    border-bottom:  2px solid #babac0;
    color: #2a2e2e;
  }
}

</style>
