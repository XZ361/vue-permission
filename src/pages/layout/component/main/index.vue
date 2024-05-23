<template>
  <div class="main">
    <Top></Top>
    <Content></Content>
  </div>
</template>

<script>
import Top from "./top.vue";
import Content from "./content.vue";
export default {
  components: {
    Top,
    Content,
  },
};
</script>

<style lang="scss" scoped></style>
