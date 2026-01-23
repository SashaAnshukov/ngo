<template>
  <article class="container" v-if="currentGuest">
    <div class="block">
      <img class="image" :src="config.public.baseUrl + currentGuest.avatar" />
      <h1 class="title">{{ currentGuest.name }}</h1>
      <em class="subtitle">{{ currentGuest.location }}</em>
      <p>Description of an artist</p>
    </div>
  </article>
</template>

<script setup>
  import {useGuestsStore} from "@/store/guests"
  const config = useRuntimeConfig()
  const guestStore  = useGuestsStore()
  const route = useRoute()
  await guestStore.FETCH_GUESTS(config.public.baseUrl)
  const id = Number(route.params.id)
  const currentGuest = computed(() => guestStore.GET_CURRENT_GUEST(id))
</script>

<script>
  export default {
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
    height: 400px;
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