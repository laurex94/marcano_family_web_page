<template>
  <div id="app" class="">
    <div class="container w-full md:w-3/4 mx-auto h-96 relative">
      <header>
      <Header></Header>
    </header>
    <main class="flex flex-col md:flex-row">
        <article class="bg-blue-100 w-full md:w-3/4" >
        <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
        </article>
        <aside class="bg-blue-300 w-full md:block md:w-1/4 text-center">
          <h4 class="text-lg sm:text-xl md:text-2xl p-2 mt-2 font-semibold text-blue-900"> Últimos Posts</h4>
          <ul class="p-2">
            <li class="text-lg font-semibold my-6 hover:underline hover:text-purple-500">
              <router-link to="/Que-es-una-pagina-web">Que es una pagina web</router-link>
            </li>
            <li class="text-lg font-semibold my-6 hover:underline hover:text-purple-500">
              <router-link to="/Tipos-paginas-web">Tipos de paginas web</router-link>
            </li>
            <li class="text-lg font-semibold my-6 hover:underline hover:text-purple-500">
              <router-link to="/elementos-de-una-pagina-web">Elementos de una pagina web</router-link>
            </li>
            <li class="text-lg font-semibold my-6 hover:underline hover:text-purple-500">
              <router-link to="/Como-crear-una-pagina-web">Como Crear una pagina web</router-link>
            </li>
          </ul>
        </aside>
    </main>
    <footer class="bg-blue-100 p-2 text-center text-gray-500">
      Derechos reservados 2021
    </footer>
    </div>
    
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components:{
    Header
  },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
