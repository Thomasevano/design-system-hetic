<template>
  <div class="form-page">
    <h1 class="title">Reset Password</h1>
    <Form class="reset-password-form" @submit="onSubmit" :validation-schema="resetPasswordSchema">
      <TextField label="Email" placeholder="Email" name="email" type="email"/>
      <TextField label="Password" placeholder="Password" name="password" type="password"/>
      <TextField label="Confirm password" placeholder="Confirm your password" name="confirmPassword" type="password"/>
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
import * as Yup from "yup";

export default {
  name: "ResetPassword",

  components: {
    Button,
    TextField,
    Form,
  },

  setup() {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }

  const resetPasswordSchema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Password must be at least 8 characters and contains uppercase, lowercase and special character").required(),
      confirmPassword: Yup.string().required().oneOf([Yup.ref("password")], "Passwords do not match")
    });

    return {
      onSubmit,
      resetPasswordSchema,
    };
  }
};
</script>
