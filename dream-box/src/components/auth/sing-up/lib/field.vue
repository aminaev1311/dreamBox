<template>
  <div
    v-if="v$ && field?.name"
    :class="[$style.field, { animate__shakeX: v$[field.name].$error }]"
    class="animate__animated"
  >
    <label :for="field.id" :class="$style['form-label']">{{
      field.title
    }}</label>
    <input
      :name="field.name"
      :type="field.type"
      :id="field.id"
      v-model.trim="v$[field.name].$model"
      :class="[$style.input, { error_input: v$[field.name].$error }]"
      :placeholder="field.placeholder"
      :autocomplete="field.type === 'password' ? 'on' : 'off'"
    />
    <div v-for="error in field.errors" :key="error.type">
      <!-- {{ v$[field.name][error.type] }} -->
      <small
        :class="$style['form-text']"
        v-if="v$[field.name][error.type].$invalid && v$[field.name].$error"
      >
        {{ error.message }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
    v$: {
      type: Object,
      required: true,
    },
  },
  mounted() {
   
  },
};
</script>

<style lang="scss" module>
.field {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4px 0;
  margin-bottom: 20px;
  align-items: flex-start;
}

.form-label {
  margin-bottom: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: $color-font-dark;
}

.input {
  width: 100%;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  background-color: transparent;
  color: $color-font-dark;
  padding-bottom: 4px;
  border-bottom: 1px solid #a9acbf;
  margin-bottom: 5px;
}

.form-text {
  color: red;
}
</style>
<style lang="scss" >
.error_input {
  border-color: red;
}
</style>