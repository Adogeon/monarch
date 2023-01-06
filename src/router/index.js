import { createRouter, createWebHistory } from "vue-router";

import ContactPage from "../views/ContactPage.vue";
import AboutPage from "../views/AboutPage.vue";
import HomePage from "../views/HomePage.vue";
import ProjectPage from "../views/ProjectPage.vue";
import ServicePage from "../views/ServicePage.vue";
import SingleProjectPage from "../views/SingleProject.vue";
import ServicePrePage from "../views/ServicePrePage.vue";
import ServiceConstructionPage from "../views/ServiceConstructionPage.vue";

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/about", component: AboutPage },
	{ path: "/project", component: ProjectPage },
	{ path: "/single", component: SingleProjectPage },
	{ path: "/contact", component: ContactPage },
	{ path: "/service", component: ServicePage },
	{ path: "/pre-construction-services", component: ServicePrePage },
	{ path: "/construction-services", component: ServiceConstructionPage },
];

const router = createRouter({
	history: createWebHistory("/monarch/"),
	routes,
});

export default router;
