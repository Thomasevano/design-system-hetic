<template>
  <div class="form-page">
    <h1 class="title">Reset Password</h1>
    <Form class="reset-password-form" @submit="onSubmit">
      <TextField label="Email" placeholder="Email" name="email" type="email" :inputState="emailState" :validationRules="validateEmail"/>
      <TextField label="Password" placeholder="Password" name="password" type="password" :inputState="passwordState" :validationRules="validatePassword"/>
      <TextField label="Confirm password" placeholder="Confirm your password" name="confirmPassword" type="password" :inputState="confirmPasswordState" :validationRules="validateConfirmPassword"/>
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

  data() {
    let emailState;
    let passwordState;
    let confirmPasswordState;

    return {
      emailState,
      passwordState,
      confirmPasswordState,
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

      this.passwordState = 'validated'
      return true;
    },
    validateConfirmPassword(value) {
      if (!value) {
        this.confirmPasswordState = 'error';
        return ': This field is required';
      }

      if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i.test(value)) {
        this.confirmPasswordState = 'error';
        return ': This field must be a valid password';
      }

      this.confirmPasswordState = 'validated'
      return true;
    }
  },
};
</script>
