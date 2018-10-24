<template>
  <el-table :data="projects_index_data" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="index-table-expand">
          <el-form-item label="项目名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="申购单位">
            <span>{{ props.row.department_name }}</span>
          </el-form-item>
          <el-form-item label="预算金额">
            <span>{{ props.row.budget_amount }}</span>
          </el-form-item>
          <el-form-item label="电话">
            <span>{{ props.row.contact_tel }}</span>
          </el-form-item>
          <el-form-item label="送货地址">
            <span>{{ props.row.delivery_address }}</span>
          </el-form-item>
          <el-form-item label="供应商资质要求">
            <span>{{ props.row.father_requirement }}</span>
          </el-form-item>
        </el-form>
      </template>
    <!-- <product_info :product="project_info"></product_info> -->
    </el-table-column>
    <el-table-column type="index" :index="indexMethod" label="序号"></el-table-column>
    <el-table-column label="项目编号" prop="no"></el-table-column>
    <el-table-column label="项目名称" prop="name"></el-table-column>
    <el-table-column label="预算金额" prop="budget_amount" sortable></el-table-column>
    <el-table-column label="开始时间" prop="start_time" sortable ></el-table-column>
    <el-table-column label="截止时间" prop="end_time" sortable></el-table-column>
    <el-table-column label="状态" prop="work_flow_state_zh_name" :filters="fliter_work_flow" :filter-method="filter_work_flow"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">竞价合同</el-button>
        <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">采购评价</el-button>
      </template>
    </el-table-column>
  </el-table>  
</template>

<script>
// import product_info from './info.vue';

export default {
  // components: {product_info},
  data() {
    return {
      fliter_work_flow: [{ text: '已成交', value: '已成交' }, { text: '延期中', value: '延期中' }],
      projects_index_data: [{
        no: 'JJ201800026',
        name: 'JJ201800026-网上竞价项目采购',
        budget_amount: 98071,
        start_time: '2018-10-19',
        end_time: '2018-10-19',
        work_flow_state_zh_name: '已成交',
        // project_info: {
          id: 1,
          name: '项目名称',
          department_name: '申购单位',
          name: '项目名称',   
          department_name: '申购单位',   
          total_price: '预算金额',   
          contact_tel: '电话',
          card: {
            card_no: '经费卡号',
            cart_money: '金额(元)',
          },   
          payment: '支付方式',   
          invoice_title: '发票抬头',   
          place: '送货地址',   
          father_requirement: '供应商资质要求'
        // }
      },
      {
        no: 'JJ201800026',
        name: 'JJ201800026-网上竞价项目采购',
        budget_amount: 980098,
        start_time: '2018-10-22',
        end_time: '2018-10-25',
        work_flow_state_zh_name: '延期中',
        // project_info: {
          id: 1,
          name: '项目名称',
          department_name: '申购单位',
          name: '项目名称',   
          department_name: '申购单位',   
          total_price: '预算金额',   
          contact_tel: '电话',
          card: {
            card_no: '经费卡号',
            cart_money: '金额(元)',
          },   
          payment: '支付方式',   
          invoice_title: '发票抬头',   
          place: '送货地址',   
          father_requirement: '供应商资质要求'
        // }
      }],
    }   
  },
  methods: {
    indexMethod(index) {
      return index + 1;
    },
    filter_work_flow(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  }
}
</script>

<style lang="scss" scoped>
.index-table-expand {
  font-size: 0;
  label {
    width: 90px;
    color: #99a9bf;
  }
  .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
}
</style>
