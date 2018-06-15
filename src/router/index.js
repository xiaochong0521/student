import Vue from 'vue'
import Router from 'vue-router'
import useEmail from '@/pages/regist/email'
import usePhone from '@/pages/regist/phone'
import login from '@/pages/login'
import main from '@/pages/main';
import perfect from '@/pages/perfect';

import center from './center';
import data from './data';
import preview from './preview';
import homework from './homework';
import course from './course';
import order from './order';
import report from './report';
import schedule from './schedule';

Vue.use(Router)

export default new Router({
  routes: [
    //注册
    //邮箱注册
    {
      title:'注册页',
      path: '/useEmail',
      name: 'useEmail',
      component: useEmail
    },
    //手机注册
    {
      title:'注册页',
      path: '/usePhone',
      name: 'usePhone',
      component: usePhone
    },
    //登录
    {
      title:'登录',
      path: '/login',
      name: 'login',
      component: login
    },
    {
      // 主页
      title:'首页',
      path: '/main',
      name: 'main',
      component: main,
    },
    {
      //完善信息
      title: '完善信息',
      path: '/perfect',
      name: 'perfect',
      component: perfect
    },
    {
      title: '个人中心',
      path: '/center',
      component: main,
      name: 'center',
      children: center
    },
    {
      title: '填写资料',
      path: '/data',
      component: main,
      name: 'data',
      children: data
    },
    {
      title: '课前预习',
      path: '/preview',
      component: main,
      name: 'preview',
      children: preview
    },
    {
      title: '课后作业',
      path: '/homework',
      component: main,
      name: 'homework',
      children: homework
    },
    {
      title: '我的课程',
      path: '/course',
      component: main,
      name: 'course',
      children: course
    },
    {
      title: '我的订单',
      path: '/order',
      component: main,
      name: 'order',
      children: order
    },
    {
      title: '成长报告',
      path: '/report',
      component: main,
      name: 'report',
      children: report
    },
    {
      title: '课程表',
      path: '/schedule',
      component: main,
      name: 'schedule',
      children: schedule
    }
  ]
})
