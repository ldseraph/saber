<template>
  <BaseLayout :page="page">
    <div class="bg-gray-100">
      <slot name="default" />
    </div>
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
