import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index/Index'
import AnalyzeIndex from '../components/DumpAnalyze/Index'
import NfcBaseIndex from '../components/NfcBase/Index'
import NfcProIndex from '../components/NfcPro/Index'

const routes = [
    { path: '/', component: Index },
    { path: '/nfc_base', component: NfcBaseIndex },
    { path: '/nfc_pro', component: NfcProIndex },
    { path: '/dump_analyze', component: AnalyzeIndex },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
