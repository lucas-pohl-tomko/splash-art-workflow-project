import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "HomeLayout",
        component: () =>
            import(
                /* webpackChunkName: "homeLayout" */ "../layouts/HomeLayout.vue"
            ),
        children: [
            {
                path: "/Gallery",
                name: "Gallery",
                meta: {
                    title: "Gallery",
                    breadcrumb: [
                        {
                            name: "Gallery",
                        },
                    ],
                },
                component: () =>
                    import(
                        /* webpackChunkName: "gallery" */ "../views/Gallery.vue"
                    ),
            },
            {
                path: "/About",
                name: "About",
                meta: {
                    title: "About",
                    breadcrumb: [
                        {
                            name: "About",
                        },
                    ],
                },
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ "../views/About.vue"
                    ),
            },
            {
                path: "/Home",
                name: "Home",
                meta: {
                    title: "Home",
                    breadcrumb: [
                        {
                            name: "Home",
                        },
                    ],
                },
                component: () =>
                    import(/* webpackChunkName: "home" */ "../views/Home.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
