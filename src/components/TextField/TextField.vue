<template>
  <div class="text-field" :class="{ error: !!errorMessage, validated: meta.valid, disabled: disabled}">
    <div class="input-group">
      <div class="label-group">
        <span v-if="errorMessage"><img src="../../assets/icon-danger.svg" alt=""></span>
        <span v-if="meta.valid"><img src="../../assets/icon-check.svg" alt=""></span>
        <label>{{ label }}</label>
        <p v-show="errorMessage" class="msg-feedback" :name="name">: {{ errorMessage }}</p>
      </div>
      <input :name="name" :placeholder="placeholder" :type="type" :value="inputValue" @input="handleChange" @blur="handleBlur" />
    </div>
  </div>
</template>

<script>
import { useField } from 'vee-validate';

export default {
  name: 'TextField',

  props: {
    label: {
      type: String,
      required: true,
    },
    name : {
      type: String,
    },
    type: {
      type: String,
    },
    placeholder: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    value: {
      type: String,
      default: "",
    }
  },

  setup(props) {
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    });
    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    }
  },

};
</script>
