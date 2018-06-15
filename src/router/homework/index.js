import willCompleted from '@/pages/homework/willCompleted';
import finish from '@/pages/homework/finish';

export default [
    {
        name: '待完成作业',
        path: 'willCompleted',
        name: 'willCompleted',
        component: willCompleted
    },
    {
        name: '已完成作业',
        path: 'finish',
        name: 'finish',
        component: finish
    }
]