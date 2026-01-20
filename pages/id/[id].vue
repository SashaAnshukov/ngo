<template>
  <article class="container">
    <div class="block">
      <img class="image" src="https://media.newyorker.com/photos/5f7f4082b71f1266ff78ebb0/master/pass/201019_r37206.jpg" />
      <h1 class="title">Name of an artist</h1>
      <em class="subtitle">Country</em>
      <p>Description of an artist</p>
    </div>
  </article>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$route)
    }
  }
</script>

<style scoped>
  .block {
    width: 60%;
    min-height: 650px;
    padding: 15px 30px;
    background: white;
    border-radius: 4px;
    text-align: left;
  }
  .image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    display: block;
    margin-bottom: 15px;
  }
</style>