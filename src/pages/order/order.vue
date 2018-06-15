<template>
    <div class="order">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="课程名">
                <el-input v-model="formInline.user" placeholder="课程名"></el-input>
            </el-form-item>
            <el-form-item label="上课时间">
                <el-date-picker
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="教师名">
                <el-input v-model="formInline.user" placeholder="课程名"></el-input>
            </el-form-item>
            <el-form-item label="课程状态">
                <el-select v-model="formInline.region" placeholder="所有状态">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <div class="tables">
            <div class="table-tit">
                <ul>
                    <li class="courses">课程名称</li>
                    <li class="jie">课节数</li>
                    <li class="stat">状态</li>
                    <li class="tea">教师</li>
                    <li class="price">价格</li>
                </ul>
            </div>
            <div class="orders">
                <div class="this-tit">
                    <div class="order-num">
                        订单编号：10001
                    </div>
                    <div class="order-time">
下单时间：2018-03-27 11:25:33
                    </div>
                </div>
                <ul>
                    <li class="courses lef">AP</li>
                    <li class="jie">10</li>
                    <li class="stat">已付款</li>
                    <li class="tea">Ann</li>
                    <li class="price">￥ 0</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                    formInline: {
                        user: '',
                        region: ''
                    }
                }
            },
            methods: {
                onSubmit() {
                    console.log('submit!');
                }
        }
    }
</script>

<style scoped>
ul,li{
    list-style: none;
}
    .order{
        float: right;
        width: 800px;
    }
    .demo-form-inline{
        padding: 30px;
    }
    .demo-form-inline button{
        background: #FF8200;
        border: none;
    }
    .tables{
        width: 800px;
        background: #fff;
        padding: 10px 0;
    }
    .table-tit{
        width: 780px;
        margin: 0 10px 10px;
        height: 38px;
        line-height: 38px;
        background: #f5f5f5;
        border: 1px solid #E8E8E8;
    }
    .table-tit ul{
        overflow: hidden;
    }
    .table-tit ul li{
        float: left;
        font-size: 12px;
        color: #333333;
        text-align: center;
    }
    .courses{
        width: 346px;
    }
    .jie{
        width: 106px;
    }
    .stat{
        width: 109px;
    }
    .tea{
        width: 101px;
    }
     .price{
         width: 106px;
     } 
     .orders{
        background: #FFFFFF;
        border: 1px solid #BFBFBF;
        width: 780px;
        height: 100px;
        margin: 10px;
     }   
     .this-tit{
         overflow: hidden;
         width: 100%;
         height: 46px;
         background: #F5F5F5;

     }
     .order-num{
         float: left;
         line-height: 46px;
         margin-left: 15px;
         font-size: 12px;
        color: #333333;
     }
     .order-time{
         font-size: 12px;
        color: #333333;
        float: right;
        margin-right: 20px;
        line-height: 46px;
     }
     .orders ul li{
        float: left;
        font-size: 12px;
        color: #333333;
        text-align: center;
        line-height: 53px;
    }
    .orders .ul{
        overflow: hidden;
    } 
</style>