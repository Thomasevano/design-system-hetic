<template>
  <h1>S'inscrire</h1>
  <text-field label="Email" placeholder="Email"/>
  <text-field label="Password" placeholder="Password"/>
  <text-field label="Confirm password" placeholder="Confirm your password"/>
  <my-button text="Create your account" typeButton="primary"/>
</template>

<script>
import MyButton from '../components/Button/Button.vue';
import TextField from '../components/TextField/TextField.vue';

export default {
  name: 'Register',

  components: {
    MyButton,
    TextField,
  },
}

</script>

<style>

</style>