<template>
  <div>
    <mainContent> </mainContent>
    <siderbarNav></siderbarNav>
  </div>
</template>

<script>
import mainContent from "./component/main";
import siderbarNav from "./component/siderbar";
export default {
  components: {
    siderbarNav,
    mainContent,
  },
};
</script>

<style lang="scss" scoped></style>
