<template>
<span>
    <button v-on:click="confirmed">OK</button>
    <button v-on:click="canceled">Cancel</button>
</span>
</template>

<script>
export default {
  name: 'MyButtons',
  data: function() {
      return {
    };
  },
  /* mounted: function() {
    this.confirmed();
    this.canceled();
  }, */
  methods: {
    confirmed: function() {
      console.log('Confirmed');
      this.$emit('confirmed');
    },
    canceled: function() {
      console.log('Canceled');
      this.$emit('canceled');
    }
  }
};
</script>

<style>
</style>
