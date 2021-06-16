<template>
  <div class="home">
    <Link text="Reset password" url="/reset"/>
    <Link text="Login" url="/login"/>
    <Link text="Register" url="/register"/>
  </div>
</template>

<script>
import '../styles/main.scss';
import Link from "../components/Link/Link.vue";

export default {
  name: 'Home',

  components: { 
    Link,
  },
}
</script>
