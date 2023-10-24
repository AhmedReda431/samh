<template>

    <ul class="nav-items">
        <li data-aos="fade-right" data-aos-delay="100">
            <nuxt-link :to="localePath('/')" class="text-decoration-none">Home</nuxt-link>
        </li>
    </ul>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/Navbar.scss";
.navbar-links li.navbar-dropdown .dropdown{
    padding: 20px;
    width: 200px;
}
</style>