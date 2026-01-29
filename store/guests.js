import { defineStore } from 'pinia'

export const useGuestsStore = defineStore('guests', {
  state: () => ({
    guests: [],
    loading: false,
    error: null,
  }),
  getters: {
    GET_CURRENT_GUEST: (state) => (id) => {
      return state.guests.find(guest => guest.id === id)
    }
  },
  actions: {
    async FETCH_GUESTS(baseUrl) {
      if (this.guests.length) {
        return
      } else
      this.loading = true
      this.error = null
      try {
        const data = await $fetch(`${baseUrl}/api/authors?populate=*`)
        this.guests = data.data.map(guest => ({
          id: guest.id,
          name: guest.name,
          email: guest.email,
          location: guest.location,
          avatar: guest.avatar?.formats?.medium.url,
        }))
      } catch (e) {
        this.error = e.message
      } finally {
        this.loading = false
      }
    }
    // SET_GUESTS (data) {
    //   console.log("data", data)
    //   this.guests = data || []
    // }
  }
})