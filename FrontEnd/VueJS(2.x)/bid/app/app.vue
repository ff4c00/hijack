<template>
  <div class="root">
  
  <div class="root-topbar">    
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index= '0' route="/projects/new">新建竞价</el-menu-item>
      <el-menu-item index= 'jol' route="/projects/index">
        <router-link to="/projects/index" class="header-title">竞价列表</router-link>
      </el-menu-item>
      <el-menu-item index="1">可点链接</el-menu-item>
      <el-submenu index="2">
        <template slot="title">下拉菜单</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>不可点链接</el-menu-item>
      
    </el-menu>
  </div>

  <!-- <div class="root-sidebar">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div> -->

  <div class="root-main-view">
    <router-view ></router-view>    
  </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      isCollapse: true
    }
  },
  methods: {

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    
  }
}
</script>

<style lang="scss" scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.root {
  &-sidebar {
    width: auto;
    float: left;
  }

  &-main-view {
    margin: 32px;
    float: left;
    width: 98%;
  }

  &-topbar {
    &-message {
      // width: 30px;
      // height: 30px;
    }
  }

}
</style>
