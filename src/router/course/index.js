import date from '@/pages/course/date';
import finished from '@/pages/course/finished';
import homework from '@/pages/course/homework';
import check from '@/pages/course/check';
import ifinish from '@/pages/course/ifinish';
import review from '@/pages/course/review';
import courseReview from '@/pages/course/courseReview'
import timetable from '@/pages/course/timetable'

export default [
    {
        name: '已上课程',
        path: 'finished',
        name: 'finished',
        component: finished
    },
    {
        name: '已约课程',
        path: 'date',
        name: 'date',
        component: date
    },
    {
        name: '作业',
        path: 'homework',
        name: 'homework',
        component: homework
    },
    {
        name: '查看作业',
        path: 'check',
        name: 'check',
        component: check
    },
    {
        name: '我完成的作业',
        path: 'ifinish',
        name: 'ifinish',
        component: ifinish
    },
    {
        name: '老师点评',
        path: 'review',
        name: 'review',
        component: review
    },
    {
        name: '评价老师',
        path: 'courseReview',
        name: 'courseReview',
        component: courseReview
    },
    {
        name: '我的课程',
        path: 'timetable',
        name: 'timetable',
        component: timetable
    }
]