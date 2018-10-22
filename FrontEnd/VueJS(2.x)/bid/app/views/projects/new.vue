<template>
  <div class="new" style="width: 100%;">

    <el-form ref="form" :model="form" label-width="150px" @submit.native.prevent label-position="left">
      <div class="new-basics-left">
      
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

      <div class="new-basics-right">

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

        <el-form-item label="附件">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="form.basics.fileList3">
            <el-button size="small" type="primary">点击上传</el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>        
        </el-form-item>

      </div>

      <div class="new-financial_cards">

        <el-form-item label="经济分类">
          <el-select v-model="form.financial_cards.subject_code_id" filterable placeholder="请选择经济分类">
            <el-option v-for="item in form.financial_cards.subject_codes" :key="item.id" :label="item.label" :value="item.lable"> </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="经费卡">
          <el-select v-model="form.financial_cards.card_id" placeholder="请选择经费卡">
            <el-option v-for="item in form.financial_cards.cards" :key="item.id" :label="item.no" :value="item.id">
              <span style="float: left">{{ item.no }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.surplus }}</span>
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="支付金额">
          <el-input-number v-model="form.financial_cards.total.value" :precision="form.financial_cards.total.precision" :step="form.financial_cards.total.step" :max="form.financial_cards.total.max"></el-input-number>
        </el-form-item>

      </div>

      <div class="new-products">
        <el-form-item label="品目">
          <el-select v-model="form.products.catalog_id" filterable placeholder="请选择商品品目">
            <el-option v-for="item in form.products.catalogs" :key="item.id" :label="item.label" :value="item.lable"> </el-option>
          </el-select>
        </el-form-item>
          
        <el-form-item label="商品名称">
          <el-input placeholder="请输入商品名称" v-model="form.products.name" clearable></el-input>
        </el-form-item>
          
        <el-form-item label="参考品牌">
          <el-select v-model="form.products.brand_id" filterable placeholder="请选择参考品牌">
            <el-option v-for="item in form.products.brands" :key="item.id" :label="item.label" :value="item.lable"> </el-option>
          </el-select>
        </el-form-item>
          
        <el-form-item label="参考型号">
          <el-input placeholder="请输入参考型号" v-model="form.products.model" clearable></el-input>
        </el-form-item>
          
        <el-form-item label="数量">
          <el-input-number v-model="form.products.num.value" :precision="form.products.num.precision" :step="form.products.num.step" :max="form.products.num.max"></el-input-number>
        </el-form-item>
          
        <el-form-item label="质保期">
          <el-input-number v-model="form.products.warranty_period.value" :precision="form.products.warranty_period.precision" :step="form.products.warranty_period.step" :max="form.products.warranty_period.max"></el-input-number>
        </el-form-item>
          
        <el-form-item label="预算单价">
          <el-input-number v-model="form.products.budget_price.value" :precision="form.products.budget_price.precision" :step="form.products.budget_price.step" :max="form.products.budget_price.max"></el-input-number>
        </el-form-item>
          
        <el-form-item label="允许其他品牌型号报价">
          <el-switch v-model="form.products.allow_other" active-text="是" inactive-text="否"> </el-switch>
        </el-form-item>
          
        <el-form-item label="技术参数">
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="form.products.requirement"> </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
        
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
        },
        financial_cards: {
          // 默认情况下，Select 会找出所有label属性包含输入值的选项
          // subject_codes: [{id: 1, name: "专用材料经费"}, {id: 2, name: "实验材料经费"}],// 经济分类列表
          subject_codes: [{id: 1, lable: "专用材料经费"}, {id: 2, lable: "实验材料经费"}],// 经济分类列表
          subject_code_id: null,
          cards: [{id: 1, no: '09387746', surplus: 5000.20}, {id: 2, no: '09091746', surplus: 2947.48}, {id: 3, no: '09091876', surplus: 837.90}, {id: 4, no: '0909109', surplus: 837653.09}],
          card_id: null,
          total: {value: null, precision: 2, step: 1, max: 1000000} // 经费卡支付金额
        },
        products: {
          catalogs: [{id: 1, lable: "服务器"}, {id: 2, lable: "台式机计算机"}, {id: 3, lable: "便携式计算机"}, {id: 4, lable: "网络交换机"}, {id: 5, lable: "网络安全设备"}],
          catalog_id: null,
          name: null,
          brands: [{id: 1, lable: "联想"}, {id: 2, lable: "浪潮"}, {id: 3, lable: "戴尔"}, {id: 4, lable: "惠普"}, {id: 5, lable: "IBM"}],
          brand_id: null,
          model: null,
          num: {value: null, precision: 0, step: 1, max: 10000},
          warranty_period: {value:null, precision: 0, step: 1, max: 48},
          budget_price: {value:null, precision: 2, step: 1, max: 100000},
          allow_other: false,
          requirement: ''
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
  
  &-basics {
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
    margin-left: 60px;
  }
  
  &-products {
    float: left;
    margin-left: 60px;
  }
}
</style>
