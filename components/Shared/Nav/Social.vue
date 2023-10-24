<template>
  <div class="social" >
    <span
      class="icon mx-3"
      data-aos="fade-right"
      data-aos-delay="700"
      
    >
      <a  target="_blank" class="text-dark">
        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
      </a>
    </span>

    <span class="icon mx-3" data-aos="fade-right" data-aos-delay="800" >
      <a  target="_blank" class="text-dark">
        <font-awesome-icon icon="fa-brands fa-facebook-f" />
      </a>
    </span>
    <span class="icon mx-3" data-aos="fade-right" data-aos-delay="800" >
      <a  target="_blank" class="text-dark">
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </a>
    </span>
    <span class="icon mx-3" data-aos="fade-right" data-aos-delay="800" >
      <a  target="_blank" class="text-dark">
        <font-awesome-icon icon="fa-brands fa-youtube" />
      </a>
    </span>

    <!-- <span class="icon mx-3" data-aos="fade-right" data-aos-delay="900">
            <font-awesome-icon icon="fa-brands fa-twitter" />
        </span> -->
  </div>
</template>

<script>
export default {
};
</script >

<style lang="scss" scoped>
.icon {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.icon:hover {
  color: $social-color;
}
</style>