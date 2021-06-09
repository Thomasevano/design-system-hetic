<template>
  <div :class="classes">
    <div class="input-group">
      <div class="label-group">
        <span v-if="inputState == 'error'"><img src="../../assets/icon-danger.svg" alt=""></span>
        <span v-if="inputState == 'validated'"><img src="../../assets/icon-check.svg" alt=""></span>
        <label>{{ label }}</label>
        <ErrorMessage v-if="inputState == 'error'" class="msg-feedback" name="field" />
      </div>
      <Field name="field" :placeholder="placeholder" :rules="isRequired" />
    </div>
  </div>
</template>

<script>
import './textfield.scss';
import { Field, ErrorMessage } from 'vee-validate';
import { reactive, computed } from 'vue';

export default {
  name: 'TextField',

  components: {
    Field,
    ErrorMessage,
  },

  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    inputState: {
      type: String,
      validator: function (value) {
        return ['validated', 'error'].indexOf(value) !== -1;
      },
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'text-field': true,
        'text-field--disabled': props.disabled,
        'text-field--validated': props.inputState === "validated",
        'text-field--error': props.inputState === "error"
      })),
    }
  },

  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }

      return ': This is empty';
    },
  },
};
</script>
