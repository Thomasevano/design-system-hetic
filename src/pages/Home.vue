<template>
  <div class="home">
    <LinkButton text="Reset password" linkUrl="/reset"/>
    <LinkButton text="Login" linkUrl="/login"/>
    <LinkButton text="Register" linkUrl="/register"/>
  </div>
</template>

<script>
import '../styles/main.scss';
import LinkButton from "../components/LinkButton/LinkButton.vue";

export default {
  name: 'Home',

  components: { 
    LinkButton,
  },
}
</script>
