<template>
  <BaseLayout :page="page">
    <div class="flex flex-wrap">
      <div v-for="i in filteredList" :key="i.permalink" class="w-1/3 p-4" >
        <vs-card actionable>
          <div slot="header" @click="toBlog(i.permalink)">
            <h5>
              {{i.title}}
            </h5>
          </div>
          <div slot="media">
            <img :src="i.assets.cover" :alt="`${i.title} cover image`" class="mb-2" v-if="i.assets.cover">
          </div>

          <div @click="toBlog(i.permalink)" >
            <div class="mb-4 mt-0" v-html="i.excerpt"></div>
            {{i.date | moment("from") }}
          </div>
        </vs-card>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '../components/BaseLayout'

export default {
  props: ['page'],
  components: { BaseLayout },
  methods: {
    toBlog(link) {
      this.$router.push({ path: link })
    }
  },
  computed: {
    filteredList() {
      return this.page.posts
    }
  }
}
</script>
