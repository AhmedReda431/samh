<template>
  <div class="nav-wrapper">
    <div class="container">
      <div class="nav-menu">
        <div class="row justify-content-between align-items-center">
          <div class="col-6">
            <div
              class="logo"
              v-if="showMobileMenu"
              :class="{
                'float-left': $i18n.locale == 'en',
                'float-right': $i18n.locale == 'ar',
              }"
            >
              <nuxt-link :to="localePath('/')" class="text-decoration-none" >
                <img src="~/assets/images/logo.png" alt="logo" height="45" width="230" />
              </nuxt-link>
            </div>
          </div>
          <div class="col-6">
            <span
              :class="{
                'float-right': $i18n.locale == 'en',
                'float-left': $i18n.locale == 'ar',
              }"
            >
              <i class="fas fa-bars fa-2x" v-b-toggle.sidebar-backdrop></i>
            </span>
          </div>
        </div>
        <!-- <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"> -->
        <div class="nav-content" v-if="!showMobileMenu">
          <div
            class="row justify-content-center align-items-center text-center"
          >
            <div class="col-md-3 col-sm-12">
              <div class="logo">
                <nuxt-link :to="localePath('/')" class="text-decoration-none" >
                  <img src="~/assets/images/logo.png" alt="logo" height="45" width="230" />
                </nuxt-link>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <!-- <ul class="nav-items">
                <li data-aos="fade-right" data-aos-delay="200">
                  <nuxt-link :to="localePath('/')" class="text-decoration-none">Home</nuxt-link>
                </li>
              </ul> -->
            </div>
            <div
              class="col-md-3 col-sm-12 d-flex align-items-center justify-content-around"
            >
              <SharedNavLang />
              <!-- <span v-if="isLoggedIn">
                <b-button variant="outline-danger" @click="logout">Logout</b-button>
              </span>
              <div class="login-button" v-else>
                <nuxt-link to="/auth/register">Register</nuxt-link>|
                <nuxt-link to="/auth/login">Login</nuxt-link>
              </div> -->
              <!-- <SharedNavSocial /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="side-menu">
      <b-sidebar
        id="sidebar-backdrop"
        :backdrop-variant="variant"
        backdrop
        shadow
      >
        <div class="px-3 py-2">
          <div class="logo">
            <nuxt-link :to="localePath('/')" class="text-decoration-none">
              <img src="~/assets/images/logo.png" alt="logo" height="45" width="230" />
            </nuxt-link>
          </div>
          <!-- <SharedNavLinks /> -->
        </div>
        <div>
          <!-- <SharedNavLang /> -->
          <!-- <span v-if="isLoggedIn">
            <b-button variant="outline-danger" @click="logout">Logout</b-button>
          </span>
          <div class="login-button d-flex justify-content-center align-items-center" v-else>
            <nuxt-link to="/auth/register">Register</nuxt-link>|
            <nuxt-link to="/auth/login">Login</nuxt-link>
          </div> -->
          <SharedNavSocial />
        </div>
      </b-sidebar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMobileMenu: true,
      variant: "dark",
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    resizeScreen() {
      if (window.innerWidth <= 992) {
        this.showMobileMenu = true;
        // this.$cookiz.set('mobileView', 'mobile')
      } else {
        this.showMobileMenu = false;
        // this.$cookiz.set('mobileView', 'deskTop')
      }
    },
    switchLang() {
      if (this.lang === "en") {
        this.lang = "ar";
      } else {
        this.lang = "en";
      }
      localStorage.setItem("lang", this.lang);
      window.location.reload();
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.resizeScreen();
    });
    window.addEventListener("load", () => {
      this.resizeScreen();
    });
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/Navbar.scss";
</style>