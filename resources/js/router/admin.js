const admin = [
    {
        path: "/admin",
        component: () => import("../layouts/home.vue"),
        children: [
            {
                path: "users",
                name: "admin-users",
                component: () => import("../pages/admin/users/index.vue"),
            }
        ]
    }
];

export default admin;
