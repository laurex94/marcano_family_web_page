import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Inicio.vue')
  },
  {
    path: '/Contenido',
    name: 'Contenido',
    component: () => import(/* webpackChunkName: "Main" */ '../views/Contenido.vue')
  },
  {
    path: '/Contacto',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "Content" */ '../views/Contacto.vue')
  },
  {
    path: '/Que-es-una-pagina-web',
    name: 'PaginaWebDefinicion',
    component: () => import(/* webpackChunkName: "PaginaWebDefinicion" */ '../views/PaginaWebDefinicion.vue')
  },
  {
    path: '/Tipos-paginas-web',
    name: 'PaginaWebTipos',
    component: () => import(/* webpackChunkName: "PaginaWebDefinicion" */ '../views/PaginaWebTipos.vue')
  },
  {
    path: '/elementos-de-una-pagina-web',
    name: 'PaginaWebElementos',
    component: () => import(/* webpackChunkName: "PaginaWebElementos" */ '../views/PaginaWebElementos.vue')
  },
  {
    path: '/Como-crear-una-pagina-web',
    name: 'PaginaWebCrear',
    component: () => import(/* webpackChunkName: "PaginaWebCrear" */ '../views/PaginaWebCrear.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
