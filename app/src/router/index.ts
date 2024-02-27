import { type RouteRecordRaw, createRouter } from "vue-router"
const Layouts = () => import("@/layouts/index.vue")

export const constantRoutes: RouteRecordRaw[] = [
    {
        path: "/redirect",
        component: Layouts,
        meta: {
            hidden: true
        },
        children: [
            {
                path: "/redirect/:path(.*)",
                component: () => import("@/views/redirect/index.vue")
            }
        ]
    },
    
]