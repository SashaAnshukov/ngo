<template>
  <article class="modal-wrap">
    <div class="modal-container" v-click-away="onClickAway">
      <span class="icon-close" @click="$emit('modalClose')" />
      <h1>Вход</h1>
      <form @submit.prevent="handleSubmit" novalidate >
        <label class="label" for="e-mail">
          Email
          <input 
              class="input" 
              type="email" 
              id="e-mail" 
              v-model="formData.email" 
              placeholder="Введите 1@mail.ru для теста"
              required>
        </label>
        <label class="label" for="password">
          Пароль
          <input 
            class="input" 
            type="password" 
            id="password" 
            v-model="formData.password"
            placeholder="Введите 123456 для теста" 
            required
          >
        </label>
        <button class="button" type="submit" :disabled="isLoading">
          {{ isLoading ? 'Отправка...' : 'Войти' }}
        </button>
      </form>
    </div>
  </article>
</template>

<script setup>
  import { toast } from 'vue3-toastify';
  const notify = () => {
    toast.info('toastify success', { autoClose: 5000 });
  };

  const formData = ref({
    email: '',
    password: '',
  });

  const isLoading = ref(false);

  const handleSubmit = async () => {
  isLoading.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (formData.value.email === '1@mail.ru' && formData.value.password === '123456') {
      toast.success('Login successful! Redirecting...', {
        position: toast.POSITION.TOP_RIGHT, // Per-toast options
      });
      // дальше можно куда-нибудь редиректнуть router.push('/')
    } else {
      toast.error('Неправильная почта или пароль');
    }
  } catch (error) {
    toast.error('Произошла ошибка при входе в систему.');
  } finally {
    isLoading.value = false;
  }
};
</script>

<script>
  import { mixin as VueClickAway } from "vue3-click-away";

  export default {
    mixins: [VueClickAway],
    props: {
      onToggle: {
        type: Function,
        default: () => {},
      },
    },
    methods: {
      // hadleFormSubmit() {
      //   toast.error('Invalid username or password.');
      // },
      onClickAway(event) {
        this.$emit('modalClose')
      }
    }
  }
</script>

<style scoped>
  .modal-wrap {
    width: 100%;
    height: 100vh;
    position: absolute;
    left:0;
    top: 0;
    background: rgba(0,0,0,0.5);
  }

  .modal-container {
    width: 400px;
    padding: 30px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border-radius: 14px;
    cursor: pointer;
  }
  .icon-close {
    width: 20px;
    height: 20px;
    position: absolute;
    right: -25px;
    top: -25px;
  }
  .icon-close::after {
    width: 100%;
    display: inline-block;
    content: '';
    border: 1px solid white;
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    left: 0;
  }
  .icon-close::before {
    width: 100%;
    display: inline-block;
    content: '';
    border: 1px solid white;
    transform: rotate(-45deg);
    position: absolute;
    top: 50%;
    left: 0;
  }

  .label {
    display: flex;
    flex-direction: column;
    margin: 15px 0;
  }

  .input {
    padding: 7px 15px;
  }

  .button {
    width: 100%;
    margin-top: 35px;
    padding: 10px 20px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background: white;
    color: black;
    transition: .3s;
    cursor: pointer;
  }
  .button:hover {
    color: white;
    background: black;
    transition: .3s;
  }
</style>