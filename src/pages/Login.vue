<template>
  <div class="form-page">
    <h1 class="title">Se connecter</h1>
    <Form class="login-form">
      <FormCTA message="Not signed up ?" linkText="Register" linkUrl="/register" />
      <TextField label="Email" placeholder="Email" inputState="error" />
      <TextField label="Password" placeholder="Password" />
      <LinkButton text="Reset password" linkUrl="/reset"/>
      <my-button text="Login" typeButton="primary" />
    </Form>
  </div>
</template>

<script>
import '../styles/main.scss';
import MyButton from "../components/Button/Button.vue";
import TextField from "../components/TextField/TextField.vue";
import FormCTA from "../components/FormCTA/FormCTA.vue";
import LinkButton from "../components/LinkButton/LinkButton.vue"
import { Form } from 'vee-validate';

export default {
  name: "Login",

  components: {
    MyButton,
    TextField,
    FormCTA,
    Form,
    LinkButton,
  },
};
</script>
