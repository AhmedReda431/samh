<template>
  <div class="lang">
    <ul class="nav-items">
      <li class="dropdown" data-aos="fade-right" data-aos-delay="400">
        <ul class="navbar-links p-0 m-0">
          <li class="navbar-dropdown">
            <!-- <nuxt-link to="/projects" :class="{'nuxt-link-exact-active' : $route.params.id}">Our Projects</nuxt-link> -->
            <a class v-if="$i18n.locale == 'en'">
              <div class="current-lang">
                <span>
                  <img
                    :src="require('@/assets/images/flags/us.svg')"
                    class="me-2 rounded"
                    height="18"
                    alt="lang flag"
                  />
                </span>
                <span class="mx-2">EN</span>
              </div>
            </a>
            <a class="d-flex align-items-center" v-else>
              <div class="current-lang">
                <span>
                  <img
                    :src="require('@/assets/images/flags/ae.svg')"
                    class="me-2 rounded"
                    height="18"
                    alt="lang flag"
                  />
                </span>
                <span class="mx-2">AR</span>
              </div>
            </a>
            <div class="dropdown">
              <nuxt-link :to="switchLocalePath('ar')" class="change-lang">
                <span class="mx-2">AR</span>
                <span>
                  <img
                    :src="require('@/assets/images/flags/ae.svg')"
                    alt="user-image"
                    class="me-2 rounded"
                    height="18"
                  />
                </span>
              </nuxt-link>

              <nuxt-link :to="switchLocalePath('en')" class="change-lang">
                <span class="mx-2">EN</span>
                <span>
                  <img
                    :src="require('@/assets/images/flags/us.svg')"
                    alt="user-image"
                    class="me-2 rounded"
                    height="18"
                  />
                </span>
              </nuxt-link>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/Navbar.scss";

</style>