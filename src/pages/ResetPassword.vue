<template>
  <div class="form-page">
    <h1 class="title">Reset Password</h1>
    <Form class="reset-password-form">
      <TextField label="Email" placeholder="Email" inputState="error" />
      <TextField label="Password" placeholder="Password" />
      <TextField label="Confirm password" placeholder="Confirm your password" />
      <Button text="Confirm" typeButton="primary" />
      <Button text="Back" typeButton="secondary" />
    </Form>
  </div>
</template>

<script>
import '../styles/main.scss';
import Button from "../components/Button/Button.vue";
import TextField from "../components/TextField/TextField.vue";
import { Form } from 'vee-validate';

export default {
  name: "ResetPassword",

  components: {
    Button,
    TextField,
    Form,
  },
};
</script>
