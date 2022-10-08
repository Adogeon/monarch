import { createRouter, createWebHashHistory } from "vue-router";

import ContactPage from "./ContactPage.vue";
import HomePage from "./HomePage.vue";
import ProjectPage from "./ProjectPage.vue";
import ServicePage from "./ServicePage.vue";

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/project", component: ProjectPage },
	{ path: "/service", component: ServicePage },
	{ path: "/contact", component: ContactPage },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
