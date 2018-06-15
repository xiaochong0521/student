<template>
    <div class="schedule">
        <full-calendar :events="fcEvents" locale="en"></full-calendar>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                fcEvents : [
                        {
                            title     :  'event1',
                            start     : '2018-07-01',
                            cssClass  : 'family',
                            YOUR_DATA : {}
                        },
                        {
                            title     : 'event2',
                            start     : '2018-07-02',
                            end       : '2018-07-03',
                            cssClass  : ['family', 'career'],
                            YOUR_DATA : {}
                        }
                    ]         

            }
        },
        components : {
            'full-calendar': require('vue-fullcalendar')	
        }
    }
</script>

<style scoped>
    .schedule{
        float: right;
        width: 800px;
    }
</style>