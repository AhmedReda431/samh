<template>
  <div class="blogs-holder">
    <b-container>
      <h2 class="pt-3 mb-4">{{ $t('simple blog') }}</h2>
      <b-row>
        <b-col lg="3" md="6" v-for="(num , index) in 4" :key="num">
          <BlogSimpleBlog :index="index" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>