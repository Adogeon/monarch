import { createRouter, createWebHistory } from "vue-router";

import ContactPage from "./ContactPage.vue";
import AboutPage from "./AboutPage.vue";
import HomePage from "./HomePage.vue";
import ProjectPage from "./ProjectPage.vue";
import ServicePage from "./ServicePage.vue";
import SingleProjectPage from "./SingleProject.vue";

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/about", component: AboutPage },
	{ path: "/project", component: ProjectPage },
	{ path: "/service", component: ServicePage },
	{ path: "/contact", component: ContactPage },
	{ path: "/single", component: SingleProjectPage },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
