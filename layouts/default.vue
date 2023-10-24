<template>
  <div :class="$i18n.locale">
    <SharedNavNavbar />
    <transition name="slide-fade">
      <Nuxt class="hold-view" />
    </transition>
    <SharedFooter />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.view {
  min-height: 50vh;
}
.hold-view {
  margin-top: 85px;
  min-height: 100vh;
}
</style>
