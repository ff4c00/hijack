<template>
  <div class="new">
    <div class="new-base">

      <el-form ref="form" :model="form" label-width="80px">
      
        <el-form-item label="项目名称">
          <el-input placeholder="请输入项目名称" v-model="form.name" clearable></el-input>
        </el-form-item>
      
        <el-form-item label="预算金额">
          <el-input-number v-model="form.total" :precision="2" :step="0.1" :max="10000"></el-input-number>
        </el-form-item>

      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input10: '',
      form: {
        name: '',
        total: 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.new {
  &-base {
    .el-row {
      width: 100%;
    }
    span {
      float: left;
    }
    div {
      float: left;
    }

  }
}
</style>
