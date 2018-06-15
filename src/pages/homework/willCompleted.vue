<template>
    <div class="will-completed">
        <div class="tab">
            <div class="completed click">
                待完成作业
            </div>
            <div class="finish">
                已完成作业
            </div>
        </div>
        <div class="mid" v-for="(item,index) in homeworkarry" :key="index">
            <div class="course-details">
                <div class="course-tit">
                    <div class="les-name">
                        {{item.answer_text}}
                        <!-- Lesson 1 Exploring Space and Astronomy -->
                    </div>
                    
                    <div class="times">
                        <img src="../../assets/time.png" alt="">
                        <span>
                            <!-- 2018-06-08  13：00-13：50 -->
                            {{item.updated_at}}
                        </span>
                    </div>
                </div>
                <div class="course-main">
                    
                    <ul class="detail-les">
                        <router-link :to="{path:'/course/homework',query: {name: item.id}}">
                            <div class="check-homework">
                                <img src="../../assets/chakanzuoye.png" alt="">
                                查看作业
                            </div>
                        </router-link>
                    </ul>
                </div>
            </div>
        </div>
        <!-- <div class="mid">
            <div class="course-details">
                <div class="course-tit">
                    <div class="les-name">
                        Lesson 1 Exploring Space and Astronomy
                    </div>
                    
                    <div class="times">
                        <img src="../../assets/time.png" alt="">
                        <span>2018-06-08  13：00-13：50</span>
                    </div>
                </div>
                <div class="course-main">
                    
                    <ul class="detail-les">
                        
                        <div class="check-homework">
                            <img src="../../assets/chakanzuoye.png" alt="">
                            查看作业
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mid">
            <div class="course-details">
                <div class="course-tit">
                    <div class="les-name">
                        Lesson 1 Exploring Space and Astronomy
                    </div>
                    
                    <div class="times">
                        <img src="../../assets/time.png" alt="">
                        <span>2018-06-08  13：00-13：50</span>
                    </div>
                </div>
                <div class="course-main">
                    
                    <ul class="detail-les">
                        
                        <div class="check-homework">
                            <img src="../../assets/chakanzuoye.png" alt="">
                            查看作业
                        </div>
                    </ul>
                </div>
            </div>
        </div> -->
    </div>
</template>
<style scoped>
    a{
        text-decoration: none;
    }
    .will-completed{
        width: 800px;
        float: right;
        background: #fff;
    }
    .tab{
        width: 740px;
        height: 50px;
        margin: 26px 30px 20px;
        background: #FAFAFA;
        border: 1px solid #DCDCDC;
    }
    .completed,.finish{
        font-size: 16px;
        color: #666666;
        line-height: 50px;
        float: left;
        text-align: center;
        width: 150px;
        height: 50px;
    }
    .click{
        border-top: 2px solid #FF8200;
        font-size: 16px;
        color: #FF8200;
        background: #fff;
    }
    .mid{
        width: 740px;
        background: #fff;
        overflow: hidden;
        padding: 0 30px;
        padding-bottom: 20px;
    }
    
    .course-details{
        width: 100%;
    }
    .course-tit{
        width: 100%;
        overflow: hidden;
        background: #FFECA7;
        height: 60px;
    }
    .times{
        float: right;
        overflow: hidden;
        padding-right: 20px;
    }
    .times img{
        margin: 20px;
        float: left;

    }
    .times span{
        font-size: 14px;
        color: #666666;
        line-height: 60px;
        float: left;
    }
    .course-main{
        overflow: hidden;
        background: #FFFBED;
        width: 100%;
    }
    .detail-les{
        padding-bottom: 27px;
    }
    .detail-les li{
        height: 40px;
        margin-top: 20px;
        line-height: 40px;
    }
    .les-name{
        float: left;
        line-height: 60px;
        padding-left: 30px;
        font-size: 14px;
        color: #333333;
    }
    .check-homework{
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        width: 120px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        font-size: 14px;
        color: #333333;
        margin-top: 24px;
        cursor: pointer;
    }
    .check-homework img{
        float: left;
        margin: 10px 10px 10px 17px;
    }
</style>
<script>
    export default {
        data(){
            return{
                homeworkarry:[
                    {answer_text:"这是一段话",updated_at:"2018-11-11"},
                    {answer_text:"这是一段话",updated_at:"2018-11-11"},
                    {answer_text:"这是一段话",updated_at:"2018-11-11"},
                ],
               
            }
        },
        beforeCreate(){
            // var _that = this;
            // _that.baseAxios.get('/api/v1/_bare/homework',{homeworkId:"12"})
            //     .then(function(response){
            //         console.log(response)
            //         _that.homeworkarry=response.data.objects;
            //     })
            
        },
    }
</script>