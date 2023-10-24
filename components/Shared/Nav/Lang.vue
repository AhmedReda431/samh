<template>
  <div class="lang">
    <nuxt-link
      :to="switchLocalePath('ar')"
      class="ar"
      v-if="$i18n.locale == 'en'"
    >
      <span>العربية</span>
      <span>
        <img
          :src="require('@/assets/images/flags/ae.svg')"
          alt="user-image"
          class="me-2 rounded"
          height="18"
      /></span>
    </nuxt-link>
    <nuxt-link
      :to="switchLocalePath('en')"
      class="en"
      v-if="$i18n.locale == 'ar'"
    >
      <span>English</span>
      <span>
        <img
          :src="require('@/assets/images/flags/us.svg')"
          alt="user-image"
          class="me-2 rounded"
          height="18" /></span
    ></nuxt-link>

  </div>
</template>

<script>
export default {};
</script>

<style>
</style>