<template>
  <div>
    <el-menu
      :default-active="currentMenu"
      mode="horizontal"
      background-color="#304156"
      text-color="#eee"
      active-text-color="#4dbcff"
    >
      <DynamicMenu :menuList="siderbarMenu" />
    </el-menu>
  </div>
</template>

<script>
import DynamicMenu from "@/components/dynamic-menu";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("permission", ["siderbarMenu", "currentMenu"]),
  },
  components: {
    DynamicMenu,
  },
};
</script>

<style lang="scss" scoped></style>
