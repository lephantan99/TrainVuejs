<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import { Navbar, Footer } from '~/components/common'
export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>
