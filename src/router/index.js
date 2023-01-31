import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/Index.vue'
import Notice from '../views/Notice.vue'
import Instructions from '../views/Instructions.vue'
import DataAnalysis from '../views/DataAnalysis.vue'
import Download from '../views/Download.vue'
import Feedback from '../views/Feedback.vue'
import NoticeDetail from '../views/NoticeDetail.vue'
import Detail from '@/views/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/Notice',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/Instructions',
    name: 'Instructions',
    component: Instructions
  },
  {
    path: '/Download',
    name: 'Download',
    component: Download
  },
  {
    path: '/DataAnalysis',
    name: 'DataAnalysis',
    component: DataAnalysis
  },
  {
    path: '/Feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/NoticeDetail',
    name: 'NoticeDetail',
    component: NoticeDetail
  },
  {
    path: '/Detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path:'*',
    redirect:'/index'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  },
})

export default router
