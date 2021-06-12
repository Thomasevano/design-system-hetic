<template>
  <TextField label="Email" placeholder="Email" inputState="error" />
</template>

<script>
import '../styles/main.scss';
import TextField from "../components/TextField/TextField.vue";

export default {
  name: 'Home',

  components: { 
    TextField,
  },
}

</script>

