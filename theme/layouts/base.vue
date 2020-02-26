<template>
  <BaseLayout :page="page">
    <slot name="default" />
  </BaseLayout>
</template>

<script>
import BaseLayout from '../components/BaseLayout'

export default {
  props: ['page'],
  components: { BaseLayout },
  computed: {
  }
}
</script>
