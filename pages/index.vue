<template>
  <div class="container">
    <Test />
  </div>
</template>

<script>

  export default {
    mounted () {
      const { $baseUrl } = useNuxtApp()
      this.fetchData($baseUrl);
    },
    methods: {
      test() {
        console.log("test");
      },
      async fetchData(baseUrl) {
        const data = await $fetch(`${baseUrl}/api/authors?populate=*`);
        console.log(data);
      },
    },
  };
</script>

<style scoped>
  .container {
    background: url('/images/bgd.jpeg') center no-repeat;
    background-size: cover;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

</style>
