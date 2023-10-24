<template>
  <div class="lang">
    <ul class="nav-items">
      <li class="dropdown" data-aos="fade-right" data-aos-delay="400">
        <ul class="navbar-links p-0 m-0">
          <li class="navbar-dropdown">
            <!-- <nuxt-link to="/projects" :class="{'nuxt-link-exact-active' : $route.params.id}">Our Projects</nuxt-link> -->
            <a class="d-flex">
              <span>
                <img :src="require(`${flag}`)" alt="lang flag" />
              </span>
              <span class="mx-2">
                {{ lang }}
              </span>
            </a>
            <div class="dropdown">
              <nuxt-link
                :to="switchLocalePath('ar', '@/assets/images/flags/ae.svg')"
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
                :to="switchLocalePath('en', '@/assets/images/flags/us.svg')"
              >
                <span>EN</span>
                <span>
                  <img
                    :src="require('@/assets/images/flags/us.svg')"
                    alt="user-image"
                    class="me-2 rounded"
                    height="18" /></span
              ></nuxt-link>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import usFlag from "@/assets/images/flags/us.svg";
import aeFlag from "@/assets/images/flags/ae.svg";
export default {
  mounted() {
    document.addEventListener("load", () => {
      if (this.$i18n.locale == "en") {
        this.lang = "en";
        this.flag = "@/assets/images/flags/us.svg";
      } else {
        this.lang = "ar";
        this.flag = "@/assets/images/flags/ae.svg";
      }
    });
  },
  data() {
    return {
      lang: "en", // Default values which you can adjust
      flag: usFlag,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/Navbar.scss";
.navbar-links li.navbar-dropdown .dropdown {
  padding: 20px;
  width: 200px;
}
</style>