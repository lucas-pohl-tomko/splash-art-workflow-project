<template>
  <div>
    <img :src="img" alt="" />

  </div>
</template>

<script>
export default {
  props: ["img"],
};
</script>

<style scoped>
img{
    width: 30em;
    padding: 2em;
}
</style>