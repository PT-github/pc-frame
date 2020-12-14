<!--
 * @Author: PT
 * @Date: 2020-06-04 10:04:33
 * @LastEditors: PT
 * @LastEditTime: 2020-12-14 17:22:22
 * @Description: 测试文件
--> 
<template>
  <div
    class="test"
    style="height: 100%"
  >
    <div style="height: 300px;border: 1px solid #CCCCCC">
      <s-table-con
        :data="tableData"
        :columns="columns"
        show-pagination
        auto-height
        table-header-dragable
        border>
      </s-table-con>
    </div>
    <!-- <s-table
      size="small"
      :data="tableData"
      style="width: 100%">
      <s-table-column
        prop="date"
        label="日期"
        width="180">
      </s-table-column>
      <s-table-column
        prop="name"
        label="姓名"
        width="180">
      </s-table-column>
      <s-table-column
        prop="address"
        label="地址">
      </s-table-column>
    </s-table> -->
    <!-- <el-table
      :data="tableData"
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
    </el-table> -->
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      columns: [
        { label: '日期', prop: 'date', width: 180 },
        { label: '姓名', prop: 'name', width: 180 },
        {
          label: '详细地址',
          children: [
            { label: '省份', prop: 'province', width: 180 },
            { label: '地址', prop: 'address' }
          ]
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海市',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海市',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海市',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海市',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {},

  watch: {}
}
</script>
<style lang='scss' scoped>
.test {
  border: 1px solid red;
  color: $color;
}
</style>
<style lang='less' scoped>
.test {
  .h2 {
    color: @color;
  }
}
</style>