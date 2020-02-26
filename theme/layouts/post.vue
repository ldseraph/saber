<template>
  <BaseLayout :page="page">
    <h1 class="leading-none mb-2 text-5xl font-black">{{ page.title }}</h1>

    <p class="text-grey-darker text-xl pt-1 md:mt-0">
      {{ page.author }} • {{ page.createdAt | moment("from") }}
    </p>

    <img :src="page.assets.cover" :alt="`${page.title} cover image`" class="mb-2" v-if="page.assets.cover">

    <!-- <saber-link
      :to="category.permalink"
      :title="`View posts in ${category.name}`"
      class="inline-block bg-gray-light hover:bg-blue-lighter leading-loose tracking-wide text-grey-darkest uppercase text-xs font-semibold rounded mr-4 px-3 pt-px"
      v-for="category in page.categoriesInfo"
      :key="category.permalink"
    >
      {{ category.name }}
    </saber-link> -->

    <div class="border-b border-blue-lighter mb-10 py-10 wysiwyg">
      <slot name="default" />
    </div>

    <nav class="flex justify-between text-sm md:text-base">
      <div>
        <saber-link
          :to="page.prevPost.permalink"
          :title="`Older Post: ${page.prevPost.title}`"
          v-if="page.prevPost"
        >
          &LeftArrow; {{ page.prevPost.title }}
        </saber-link>
      </div>

      <div>
        <saber-link
          :to="page.nextPost.permalink"
          :title="`Newer Post: ${page.nextPost.title}`"
          v-if="page.nextPost"
        >
          {{ page.nextPost.title }} &RightArrow;
        </saber-link>
      </div>
    </nav>

  </BaseLayout>
</template>

<script>
import BaseLayout from '../components/BaseLayout'

export default {
  props: ['page'],
  components: { BaseLayout },
  methods: {
  },
  computed: {
  }
}
</script>
