<template>
  <div class="new" style="width: 100%;">

    <el-form ref="form" :model="form" label-width="150px" @submit.native.prevent label-position="left">
      <div class="new-base-left">
      
        <el-form-item label="项目名称">
          <el-input placeholder="请输入项目名称" v-model="form.basics.project_name" clearable></el-input>
        </el-form-item>
      
        <el-form-item label="预算金额">
          <el-input-number v-model="form.basics.budget_amount" :precision="2" :step="1" :max="10000"></el-input-number>
        </el-form-item>

        <el-form-item label="采购单位名称">
          <el-input placeholder="请输入采购单位名称" v-model="form.basics.department_name" clearable></el-input>
        </el-form-item>

        <el-form-item label="挂网天数">
          <el-input-number v-model="form.basics.online_days" :precision="0" :step="1" :max="7"></el-input-number>
        </el-form-item>

        <el-form-item label="联系人姓名">
          <el-input placeholder="请输入联系人姓名" v-model="form.basics.contact_name" clearable></el-input>
        </el-form-item>

        <el-form-item label="是否公开联系方式">
          <el-switch v-model="form.basics.show_contact" active-text="是" inactive-text="否"> </el-switch>
        </el-form-item>


        <el-form-item label="支付方式">
          <el-radio-group v-model="form.basics.payment_method">
            <el-radio-button v-for="payment in form.basics.payment_methods" :label="payment.name" :key='payment.id'></el-radio-button>
          </el-radio-group>
        </el-form-item>


      </div>

      <div class="new-base-right">

        <el-form-item label="发票信息">
          <el-select v-model="form.basics.invoice_id" placeholder="请选择发票">
            <el-option v-for="item in form.basics.invoice_info" :key="item.id" :label="item.title" :value="item.id">
              <span style="float: left">{{ item.title }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.type }}</span>
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="合同签订时间">
          <el-input-number v-model="form.basics.contract_time.value" :precision="form.basics.contract_time.precision" :step="form.basics.contract_time.step" :max="form.basics.contract_time.max"></el-input-number>
        </el-form-item>

        <el-form-item label="交货时间">
          <el-input-number v-model="form.basics.delivery_time.value" :precision="form.basics.contract_time.precision" :step="form.basics.contract_time.step" :max="form.basics.contract_time.max"></el-input-number>          
        </el-form-item>

        <el-form-item label="送货地址">
          <el-select v-model="form.basics.delivery_address" placeholder="请选择">
            <el-option-group v-for="group in form.basics.delivery_addresses" :key="group.label" :label="group.label">
              <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>

        <el-form-item label="供应商资质要求">
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="form.basics.father_requirement"> </el-input>
        </el-form-item>

        <el-form-item label="售后服务要求">
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="form.basics.after_sale_service"> </el-input>
        </el-form-item>

        <el-form-item label="售后服务要求">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="form.basics.fileList3">
            <el-button size="small" type="primary">点击上传</el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>        
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>


      </div>

      <div>

      </div>


    </el-form>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        basics: {
          project_name: '项目名称',
          budget_amount: 0, // 预算总额
          department_name: '采购单位名称',
          online_days:5, //挂网天数
          contact_name: '联系人姓名',
          contact_tel: '联系人电话',
          show_contact: false,// 是否公开联系方式
          payment_methods: [{id: 1, name:'货到付款'}, {id: 2, name: '帐期支付'}], //'支付方式'
          payment_method: '货到付款',
          invoice_info:[{id: 1, title: '发票抬头一', type: '增值税普通发票'}, {id: 2, title: '发票抬头二', type: '增值税专用发票'}],
          invoice_id: 1,
          contract_time: {precision: 0, step: 1, max: 7, value: 3},// 成交后n日内签订合同
          delivery_time: {precision: 0, step: 1, max: 7, value: 3},// 合同签订后n日内交货
          delivery_addresses: [{
            label: '常用地址',
            options: [{
              value: 1,
              label: '常用地址一'
            }, {
              value: 2,
              label: '常用地址二'
            }]
          }, {
            label: '其他地址',
            options: [{
              value: 3,
              label: '其他地址一'
            }, {
              value: 4,
              label: '其他地址二'
            }]
          }],
          delivery_address: null,
          father_requirement: '',// 供应商资质要求
          after_sale_service: '',//售后服务
          attachment: '', // 附件
          fileList3: [{
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }, {
            name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }]
        }
      }
    }
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList3 = fileList.slice(-3);
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style lang="scss" scoped>
.new {
  width: 100%;
  
  &-base {
    width: 100%;
    float: left;

    &-left {
      width: 30%;
      float: left;
    }

    &-right {
      width: auto;
      float: left;
      margin-left: 60px;
    }
  }

  &-financial_cards {
  float: left;

  }
  

}
</style>
