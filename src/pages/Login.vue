<template>
  <div class="form-page">
    <h1 class="title">Se connecter</h1>
    <Form class="login-form" @submit="onSubmit" :validation-schema="loginSchema">
      <FormCTA message="Not signed up ?" linkText="Register" linkUrl="/register" />
      <TextField label="Email" placeholder="Email" name="email" type="email"/>
      <TextField label="Password" placeholder="Password" name="password" type="password"/>
      <div class="reset-password-link">
        <LinkButton text="Reset password" linkUrl="/reset"/>
      </div>
      <Button text="Login" typeButton="primary" />
    </Form>
  </div>
</template>

<script>
import Button from "../components/Button/Button.vue";
import TextField from "../components/TextField/TextField.vue";
import FormCTA from "../components/FormCTA/FormCTA.vue";
import LinkButton from "../components/LinkButton/LinkButton.vue"
import { Form } from 'vee-validate';
import * as Yup from "yup";

export default {
  name: "Login",
  components: {
    Button,
    TextField,
    FormCTA,
    Form,
    LinkButton,
  },

  setup() {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }

  const loginSchema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    return {
      onSubmit,
      loginSchema,
    };
  }
};
</script>
