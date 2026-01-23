<template>
  <div class="container">
    <!-- <Test /> -->

    <!-- <h1>{{ name }}</h1> -->
    <UserCard 
      v-for="guest in guestStore.guests" 
      :key="guest.id"
      :id="guest.id"
      :name="guest.name"
      :email="guest.email"
      :location="guest.location"    
      :avatar="guest.avatar"
    />
  </div>
</template>

<script setup>
  import {useGuestsStore} from "@/store/guests"
  //import { storeToRefs } from 'pinia'
  const config = useRuntimeConfig()
  const guestStore = useGuestsStore()
  await guestStore.FETCH_GUESTS(config.public.baseUrl)
  

  // const { data, error } = await useAsyncData(
  //   'guests', 
  //   () => $fetch(`${config.public.baseUrl}/api/authors?populate=*`),
  //   {
  //     transform: (res) => {
  //       console.log("RES", res)
  //       return res.data.map(guest => ({
  //         id: guest.id, 
  //         name: guest.name, 
  //         email: guest.email,
  //         location: guest.location, 
  //         avatar: guest.avatar.formats?.medium.url,
  //       }))
  //     }
  //   }
  // )
  // if (data.value) {
  //   guestStore.SET_GUESTS(data.value)
  // }
</script>

<script>

  export default {
    data () {
      return {
      }
    },
    asyncData () {

    },
    mounted () {
    },
    methods: {
      // async fetchData(baseUrl) {
      //   await $fetch(`${baseUrl}/api/authors?populate=*`).then((res) => {
      //     this.guests = res.data  
      //     console.log(this.guests);
      //   });
      // },
    },
  };
</script>

<style scoped>
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
