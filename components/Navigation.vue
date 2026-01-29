<template>
  <nav class="navigation">
    <Logo /> 
    <NuxtLink  
      v-for="elem in linksArray" 
      class="link" 
      :to="elem.to" 
      :key="elem.title"
    >
      {{elem.title}}
    </NuxtLink >
    <button @click ="toggleModal" class="button">Enter</button>
    <Modal v-if="showModal" @modalClose="closeModal"/>
  </nav>
</template>

<script>
  import Logo from './navigation/Logo';
  export default {
    components: {
      Logo
    },
    data () {
      return {
        linksArray: [
          {to: "/", title: "Main"},
          {to: "/about", title: "About page"},
        ],
        showModal: false
      }
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal
      },
      closeModal() {
        this.showModal = false
      },
    }
  }
</script>

<style scoped>
.navigation {
  width: 100%;
  height: 80px;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255,255,255,0.2);
}

.button {
  width: 100px;
  padding: 10px 15px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 30px;
  cursor: pointer;
  transition: .3s;
}
.button:hover {
  background: black;
  color: white;
  transition: .3s;
}

.link {
  color: black;
}
</style>