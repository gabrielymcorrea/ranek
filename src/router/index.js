import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdutoView from '../views/ProdutoView.vue'
import LoginView from '../views/LoginView.vue'
import UsuarioView from '../views/usuario/UsuarioView.vue'
import UsuarioProdutos from '../views/usuario/ProdutosView.vue'
import UsuarioVendas from '../views/usuario/VendasView.vue'
import UsuarioEditar from '../views/usuario/EditarView.vue'
import UsuarioCompras from '../views/usuario/ComprasView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/produto/:id',
    name: 'ProdutoView',
    component: ProdutoView,
    props: true
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: "/usuario",
    component: UsuarioView,
    children: [
      {
        path: "",
        name: "usuario",
        component: UsuarioProdutos
      },
      {
        path: "compras",
        name: "compras",
        component: UsuarioCompras
      },
      {
        path: "vendas",
        name: "vendas",
        component: UsuarioVendas
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: UsuarioEditar
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
})


export default router