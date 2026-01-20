<template>
  <NuxtLink :to="`/id/${id}`" class="card">
    <img class="image" :src="$baseUrl + avatar">
    <div class="text">
      <h2>{{ name }}</h2>
      <em class="email">{{ email }}</em>
      <p>{{ location }}</p>
    </div>
  </NuxtLink>
</template>

<script>
  export default {
    props: {
      id: { type: Number, default: null},
      name: { type: String, default: ""},
      email: { type: String, default: ""},
      location: { type: String, default: ""},
      avatar: { type: String, default: ""},
    },
  }
</script>

<style scoped>
  .card {
    width: 200px;
    height: 350px;
    margin: 30px;
    background: white;
    border-radius: 10px;
  }
  .image {
    width: 100%;
    height: 190px;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
  }
  .text {
    height: 40%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
  }
  .email {
    margin: 10px 0;
  }
</style>