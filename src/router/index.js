import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";
import Productos from "../views/shop/Productos.vue";
import Carrito from "../views/shop/Carrito.vue";
import Historial from "../views/history/Historial.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/productos",
      name: "productos",
      component: Productos,
    },
    {
      path: "/historial",
      name: "historial",
      component: Historial,
      props: (route) => ({
        historial: JSON.parse(localStorage.getItem("historial")) || [],
      }),
    },
    {
      path: "/carrito",
      name: "carrito",
      component: Carrito,
    },
  ],
});

router.beforeEach((to, from, next) => {
  let historial = localStorage.getItem("historial") || "[]";
  historial = JSON.parse(historial);
  historial.push(to.path);
  localStorage.setItem("historial", JSON.stringify(historial));
  next();
});

export default router;
