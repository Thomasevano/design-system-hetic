<template>
  <div class="form-page">
    <h1 class="title">S'inscrire</h1>
    <Form class="register-form">
      <FormCTA message="Already got an account ?" linkText="Sign in" linkUrl="/login" />
      <TextField label="Email" placeholder="Email" inputState="error" />
      <TextField label="Password" placeholder="Password" />
      <TextField label="Confirm password" placeholder="Confirm your password" />
      <my-button text="Create your account" typeButton="primary" />
    </Form>
  </div>
</template>

<script>
import MyButton from "../components/Button/Button.vue";
import TextField from "../components/TextField/TextField.vue";
import FormCTA from "../components/FormCTA/FormCTA.vue";
import { Form } from 'vee-validate';

export default {
  name: "Register",

  components: {
    MyButton,
    TextField,
    FormCTA,
    Form,
  },
};
</script>
