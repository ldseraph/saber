<template>
  <div class="m-auto w-9/12 max-w-6xl text-gray-700">
    <SiteHeader />

    <main
      class="w-full py-10 px-4"
      role="main"
    >
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

export default {
  components: { SiteHeader, SiteFooter },
  props: ['page'],
  head() {
    const pageTitle = this.page && this.page.title
    const siteTitle = this.$siteConfig.title

    return {
      title: pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle
    }
  }
}
</script>