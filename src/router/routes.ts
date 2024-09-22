import { RouteRecordRaw } from 'vue-router';
import { Key } from 'src/utils/useStatic';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        meta: {
            title: Key.SYS_NAME,
        },
        children: [
            {
                path: '/index',
                component: () => import('pages/IndexPage.vue'),
                meta: {
                    title: '首页',
                },
            },
        ],
    },
];

export default routes;
