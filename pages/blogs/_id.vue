<template>
  <div class="single-blog">
    <b-container>{{ $t('blog') }} : {{ id }}</b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>

<style>
</style>