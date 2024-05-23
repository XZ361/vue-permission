<template>
  <div>
    <aside>
      <div>
        <div>
          <el-dropdown trigger="click" placement="top">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!-- <div @click="logout">logout</div> -->
      </div>
    </aside>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
