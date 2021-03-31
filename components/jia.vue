<template>
  <span>
    <img src="../assets/1.png" alt=""  @click="ups" v-if="show==false"/><img
      src="../assets/2.png"
      alt=""
      @click="xias"
      v-else
    />
  </span>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {},
  methods: {
    ups() {
      this.show = true;
      this.$store.commit("ups");
    },
    xias() {
      this.show = false;
      this.$store.commit("xias");
    },
  },
};
</script>

<style lang='scss' scoped>
</style>
