<template>
  <div class="form-page">
    <h1 class="title">Se connecter</h1>
    <Form class="login-form" @submit="onSubmit">
      <FormCTA message="Not signed up ?" linkText="Register" linkUrl="/register" />
      <TextField label="Email" placeholder="Email" name="email" type="email" :inputState="emailState" :validationRules="validateEmail"/>
      <TextField label="Password" placeholder="Password" name="password" type="password" :inputState="passwordState" :validationRules="validatePassword"/>
      <LinkButton text="Reset password" linkUrl="/reset"/>
      <Button text="Login" typeButton="primary" />
    </Form>
  </div>
</template>

<script>
import '../styles/main.scss';
import Button from "../components/Button/Button.vue";
import TextField from "../components/TextField/TextField.vue";
import FormCTA from "../components/FormCTA/FormCTA.vue";
import LinkButton from "../components/LinkButton/LinkButton.vue"
import { Form } from 'vee-validate';

export default {
  name: "Login",

  components: {
    Button,
    TextField,
    FormCTA,
    Form,
    LinkButton,
  },

  data() {
    let emailState;
    let passwordState;

    return {
      emailState,
      passwordState,
    }
  },

  methods: {
    onSubmit(values) {
      alert(values);
    },
    validateEmail(value) {
      if (!value) {
        this.emailState = 'error';
        return `: This field is required`;
      }

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        this.emailState = 'error';
        return ': This field must be a valid email';
      }

      this.emailState = 'validated'
      return true;
    },
    validatePassword(value) {
      if (!value) {
        this.passwordState = 'error';
        return ': This field is required';
      }

      if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i.test(value)) {
        this.passwordState = 'error';
        return ': This field must be a valid password';
      }

      this.emailState = 'validated'
      return true;
    }
  },
};
</script>
