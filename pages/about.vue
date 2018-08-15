<template>
  <section class="container">
    <div>
     about       
      <nuxt-link :to="localePath('index')">index</nuxt-link>
    </div>
        <el-table
      :data="[]"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  <hr>
      <el-button @click="clickAlert()">默认按钮</el-button>

  </section>
</template>
<script>
export default {
  components: {
  }
  ,
  methods:{
    clickAlert(){
      this.$message.error('错了哦，这是一条错误消息');
    }
  }
}
</script>