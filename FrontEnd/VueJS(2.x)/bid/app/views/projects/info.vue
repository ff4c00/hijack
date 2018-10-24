<template slot-scope="props">
  <el-form label-position="left" inline class="index-table-expand">
    <el-form-item label="项目名称">
      <span>{{ project.name }}</span>
    </el-form-item>
    <el-form-item label="申购单位">
      <span>{{ project.department_name }}</span>
    </el-form-item>
    <el-form-item label="预算金额">
      <span>{{ project.budget_amount }}</span>
    </el-form-item>
    <el-form-item label="电话">
      <span>{{ project.contact_tel }}</span>
    </el-form-item>
    <el-form-item label="送货地址">
      <span>{{ project.delivery_address }}</span>
    </el-form-item>
    <el-form-item label="供应商资质要求">
      <span>{{ project.father_requirement }}</span>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>

<style lang="scss" scoped>

</style>
