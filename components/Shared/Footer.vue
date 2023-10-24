<template>
  <div class="footer-holder">
    <footer>
      <b-conbtainer>
        <div class="d-flex justify-content-center laign-items-center">
          <p>
            <span class="mx-1">&copy;</span>
            {{ new Date().getFullYear() }}
          </p>
        </div>
      </b-conbtainer>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  margin-top: 30px;
  padding: 15px;
  box-shadow: 0 0 5px 1px #ccc;
  p {
    margin: 0;
  }
}
</style>