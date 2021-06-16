<template>
  <div class="home">
    <Link text="Reset password" linkUrl="/reset"/>
    <Link text="Login" linkUrl="/login"/>
    <Link text="Register" linkUrl="/register"/>
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
