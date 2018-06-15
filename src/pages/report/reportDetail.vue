<template>
    <div class="report-detail">
        <div class="main-tit">
            <p class="firline">Lesson 64 The Wolf Within / Lesson 64 The Wolf Within</p>
            <p>成长报告</p>
        </div>
        <div class="tea">
            <div class="tilte">教师评语</div>
            <div class="teach">
               <div class="firs">
                    <div class="left-fir"><span>Teacher:</span>   Robert Little</div>   
                    <div class="student-name"><span>Student:</span>   ALEX ren </div>
                </div>  
                <div class="feedback">
                    Feedback: Alex and I practiced writing a narrative story together. I wrote a sentence, and he followed by writing 
                the next. I taught him that each sentence, no matter how crazy, needs to logically follow the sentence before. By 
                the end of the story, he was doing that a lot better. Skills the student exhibited well: Good writing!
                </div>
                
                <div class="suggestion">
                    Study Suggestion: Comment on last homework: That was a good paragraph about why the boy was the best 
                employee.
                </div>  
                
            </div>
        </div>
        <div class="tea">
            <div class="tilte">成绩单</div>
            <div class="teach">
               <div class="firs">
                    <div class="left-fir"><span>Teacher:</span>   Robert Little</div>   
                    <div class="student-name"><span>Student:</span>   ALEX ren </div>
                </div>  
                <div class="feedback">
                    Feedback: Alex and I practiced writing a narrative story together. I wrote a sentence, and he followed by writing 
                the next. I taught him that each sentence, no matter how crazy, needs to logically follow the sentence before. By 
                the end of the story, he was doing that a lot better. Skills the student exhibited well: Good writing!
                </div>
                
                <div class="suggestion">
                    Study Suggestion: Comment on last homework: That was a good paragraph about why the boy was the best 
                employee.
                </div>  
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .report-detail{
        width: 800px;
        float: right;
        background: #fff;
    }
    .main-tit{
        height: 97px;
        font-size: 18px;
        color: #333333;
        line-height: 36px;
        text-align: center;
    }
    .firline{
        margin-top: 25px;
    }
    .tea{
        width: 740px;
        margin: 0 auto;
    }
    .tilte{
        width: 740px;
        height: 40px;
        background: #F6F6F6;
        font-size: 16px;
        color: #333333;
        border-left: 3px solid #FF8200;
        line-height: 40px;
        text-indent: 10px; 
    }
    .teach{
        margin-top: 20px;
    }
    .firs{
        overflow: hidden;
    }
    .left-fir,.student-name{
        width: 50%;
        float: left;
        font-size: 14px;
        color: #151515;
        line-height: 35px;
    }
    .left-fir span,.student-name span{

    }
    .feedback,.suggestion{
        margin-top: 35px;
        font-size: 14px;
        color: #151515;
        line-height: 35px;
    }
</style>