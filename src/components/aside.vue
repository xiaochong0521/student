<template>
    <div class="aside">
        <div class="select-bar">
            <ul class="bars">
                <li class="active" v-for="(items, index) in bars">
                    <img class="imgs center" :src=items.img alt="">
                    <span>{{items.name}}</span>
                </li>
                <!-- <li class="active">
                    <img class="imgs" src="@/assets/kechengbiao_h.png" alt="">
                    <span>课程表</span>
                </li>
                <li class="active">
                    <img class="imgs" src="@/assets/yuxi_h.png" alt="">
                    <span>课前预习</span>
                </li>
                <li class="active">
                    <img class="imgs" src="@/assets/zuoye_h.png" alt="">
                    <span>课后作业</span>
                </li>
                <li class="active">
                    <img class="imgs" src="@/assets/kecheng_h.png" alt="">
                    <span>我的课程</span>
                </li>
                <li class="active">
                    <img class="imgs" src="@/assets/dingdan_h.png" alt="">
                    <span>我的订单</span>
                </li>
                <li class="active">
                    <img class="imgs" src="@/assets/chengzhang_h.png" alt="">
                    <span>成长报告</span>
                </li> -->
            </ul>
        </div>
        <div class="wenti">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'asides',
        data(){
            return{
                bars:[{
                    name: '个人中心',
                    img: '@/assets/me01.png',
                    path: ''
                },{
                    name: '课程表',
                    img: require('@/assets/kechengbiao_h.png'),
                    path: ''
                },{
                    name: '课前预习',
                    img: '@/assets/yuxi_h.png',
                    path: ''
                },{
                    name: '课后作业',
                    img: '@/assets/zuoye_h.png',
                    path: ''
                },{
                    name: '我的课程',
                    img: '@/assets/kecheng_h.png',
                    path: ''
                },{
                    name: '我的订单',
                    img: '@/assets/dingdan_h.png',
                    path: ''
                },{
                    name: '成长报告',
                    img: '@/assets/chengzhang_h.png',
                    path: ''
                }]
            }
        },
        watch:{

        },
        created(){

        },
        methods:{
            activity(){
                var arr = ['me01.png','kechengbiao_h.png','yuxi_h.png','zuoye_h.png','kecheng_h.png','dingdan_h.png','chengzhang_h.png']
                var arr2 = ['me02.png','kechengbiao_r.png','yuxi_r.png','zuoye_r.png','kecheng_r.png','dingdan_r.png','chengzhang_r.png']
            }
        }
    }
</script>

<style scoped>
    .aside{
        width: 180px;
        float: left;
    }
    .select-bar{
        width: 100%;
        height: 450px;
        background: #fff;
    }
    .bars{
        padding-top: 10px;
    }
    .bars li{
        height: 60px;
        font-size: 16px;
        color: #333333;
        line-height: 60px;
        cursor: pointer;
    }
    .imgs{
        float: left;
        margin: 20px;
    }
    .wenti{
        width: 180px;
        height: 102px;
        background: url('../assets/wenti.png');
        margin-top: 20px;
    }
</style>