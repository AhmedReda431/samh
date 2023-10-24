<template>
  <section class="blog-holder">
    <b-container>
      <h2 class="pt-3 mb-4">{{ $t('simple blog') }}</h2>
      <b-row>
        <b-col lg="3" md="6" v-for="(num , index) in 4" :key="num">
          <!-- <b-card
            :title="`${$t('blog')} ${index + 1}`"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>{{ $t('desc') }} {{ $t('blog') }} {{ index + 1 }}</b-card-text>
            <nuxt-link
              :to="localePath(`/blogs/${index + 1}`)"
              variant="primary"
            >{{ $t('read more') }}</nuxt-link>
          </b-card>-->
          <b-card class="p-0 m-0">
            <figure class="snip1208">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample66.jpg"
                alt="sample66"
              />
              <div class="date">
                <span class="day">28</span>
                <span class="month">Oct</span>
              </div>
              <i class="fa-brands fa-blogger-b"></i>
              <figcaption>
                <h5 class="font-weight-bold" v-if="$i18n.locale == 'ar'">
                  <span>{{ $t('title') }}</span>
                  <span>{{ $t('blog') }}</span>
                  <span>{{ index + 1 }}</span>
                </h5>
                <h5 class="font-weight-bold" v-else>
                  <span>{{ $t('blog') }}</span>
                  <span>{{ index + 1 }}</span>
                  <span>{{ $t('title') }}</span>
                </h5>
                <p>{{ $t('desc') }}</p>
                <button>
                  <nuxt-link
                    :to="localePath(`/blogs/${index + 1}`)"
                    variant="primary"
                  >{{ $t('read more') }}</nuxt-link>
                </button>
              </figcaption>
              <a href="#"></a>
            </figure>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
figure.snip1208 {
  font-family: "Raleway", Arial, sans-serif;
  color: #fff;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
  text-align: left;
  font-size: 16px;
  width: 100%;
  margin: 10px auto;
}
figure.snip1208 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
figure.snip1208 img {
  width: 100%;
  vertical-align: top;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
figure.snip1208 figcaption {
  padding: 25px 5px;
  position: relative;
}
figure.snip1208 .date,
figure.snip1208 i {
  background-color: $main-color;
  top: 25px;
  color: #fff;
  left: 25px;
  min-height: 60px;
  min-width: 60px;
  position: absolute;
  text-align: center;
}
figure.snip1208 .date {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
}
figure.snip1208 .date span {
  display: block;
  line-height: 30px;
}
figure.snip1208 .date .month {
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.1);
}
figure.snip1208 i {
  line-height: 60px;
  font-size: 30px;
  -webkit-transform: rotateY(-90deg);
  transform: rotateY(-90deg);
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
figure.snip1208 h3,
figure.snip1208 p {
  margin: 0;
  padding: 0;
}
figure.snip1208 h3 {
  margin-bottom: 10px;
  display: inline-block;
  font-weight: 600;
  color: #333333;
  text-transform: uppercase;
}
figure.snip1208 p {
  font-size: 0.8em;
  margin-bottom: 20px;
  line-height: 1.6em;
}
figure.snip1208 button a {
  border: medium none;
  padding: 10px 20px;
  background-color: $main-color;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 0.8em;
}
figure.snip1208 a {
  left: 0;
  right: 0;
  // top: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
}
figure.snip1208:hover img,
figure.snip1208.hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
figure.snip1208:hover .date,
figure.snip1208.hover .date {
  -webkit-transform: rotateY(90deg);
  transform: rotateY(90deg);
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
figure.snip1208:hover i,
figure.snip1208.hover i {
  -webkit-transform: rotateY(0);
  transform: rotateY(0);
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
figure.snip1208:hover button a,
figure.snip1208.hover button a {
  background-color: #117964;
}
a,
a:hover,
a:active {
  text-decoration: none;
  box-shadow: none;
}
</style>