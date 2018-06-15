<template>
    <div class="timetable">
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
        <div class="forms">
            <div class="forms-tit">
                <div class="text">
                    ESL英语综合提升中级
                </div>
                <div class="runing">
                    <div class="running-bons">
                        01/45
                    </div>
                    <div class="run-state">
                        进行中
                    </div>
                </div>
            </div>
            <div class="forms-contain">
                <div class="lef">
                    <img class="time" src="../../assets/time.png" alt="">
                    <span class="time-de">2018.02.27 — 04.28</span>
                    <div class="teache">
                        <img src="../../assets/logo.png" alt="">
                        <span>Kira Yuan</span>
                    </div>
                </div>
                <div class="rig">
                    <img src="../../assets/chakanzuoye.png" alt="">
                    <span>查看详情</span>
                </div>
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
    .timetable{
        width: 800px;
        float: right;
        background: #fff;
    }
    .demo-form-inline{
        padding: 30px;
    }
    .demo-form-inline button{
        background: #FF8200;
        border: none;
    }
    .forms-tit{
        width: 740px;
        height: 60px;
        background: #FFECA7;
        overflow: hidden;
    }
    .forms{
        width: 740px;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .text{
        float: left;
        font-size: 14px;
        color: #333333;
        line-height: 60px;
        margin-left: 23px;
    }
    .runing{
        float: right;
        overflow: hidden;
    }
    .running-bons{
        line-height: 60px;
        font-size: 14px;
        color: #333333;
        float: left;
        margin-right: 17px;

    }
    .run-state{
        width: 80px;
        height: 40px;
        float: right;
        margin: 10px 20px;
        font-size: 14px;
        line-height: 40px;
        color: #FF8200;
        background: #FFFFFF;
        border-radius: 5px;
        text-align: center;
    }
    .forms-contain{
        background: #FFFBED;
        overflow: hidden;
    }
    .lef{
        float: left;
        overflow: hidden;
    }
    .time{
        float: left;
        margin: 31px 13px 32px 23px;
    }
    .time-de{
        float: left;
        line-height: 83px;
        font-size: 14px;
        color: #333333;
    }
    .teache{
        float: left;
        overflow: hidden;
        margin-left: 134px;
    }
    .teache img{
        width: 30px;
        height: 30px;
        float: left;
        margin: 24px 10px 28px 0;
        border-radius: 50%;
    }
    .teache span{
        font-size: 14px;
        color: #333333;
        line-height: 83px;
    }
    .rig{
        width: 140px;
        height: 40px;
        line-height: 40px;
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        float: right;
        margin: 20px;
        font-size: 14px;
        color: #333333;
        cursor: pointer;
    }
    .rig img{
        float: left;
        margin: 10px 10px 10px 17px;
        
    }
</style>