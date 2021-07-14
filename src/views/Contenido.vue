<template>
    <div id="contenido" class="h-full">

        <main class="grid grid-cols-1 md:grid-cols-2 p-3 gap-2">
            <!-- Pagina web -->
            <div class="p-2">
                <img src="../assets/imagen-web.jpg" alt="pagina-web" class="w-full">
                <h3 class="text-xl lg:text-2xl p-2 font-bold text-blue-900">¿Qué es una página web?</h3>
                <p class="text-justify p-3 mb-3">
                    Una página web es un documento capaz de contener texto, sonido, vídeo, programas, enlaces, imágenes, hipervínculos, etc...
                </p>
                <router-link to="/Que-es-una-pagina-web" class="bg-purple-300 text-xl p-3 py-2 ml-1 rounded-md hover:bg-gray-300"> <span class="hover:underline"> Ver mas </span>>> </router-link>
            </div>
            <!--Tipos de paginas web -->
            <div class="p-2">
                <img src="../assets/tipos-paginas-web.jpg" alt="tipos-paginas-web" class="w-full">
                <h3 class="text-xl lg:text-2xl p-2 font-bold text-blue-900">Tipos de páginas web</h3>
                <p class="text-justify p-3 mb-3">
                    Los tipos de paginas web se puede dividir en varios tipos: según su construcción, según la tecnología utilizada y según la función que cumplira la plataforma...
                </p>
                <router-link to="/Tipos-paginas-web" class="bg-purple-300 text-xl p-3 py-2 ml-1 rounded-md hover:bg-gray-300"> <span class="hover:underline"> Ver mas </span>>> </router-link>
            </div>
            <!--Elementos de una pagina web -->
            <div class="p-2">
                <img src="../assets/elementos-pagina-web.jpg" alt="elementos-pagina-web" class="w-full">
                <h3 class="text-xl lg:text-2xl p-2 font-bold text-blue-900">Elementos de una página web</h3>
                <p class="text-justify p-3 mb-3">
                    Las principales características que constituyen una página en Internet son: los textos, las imagenes, el espacio web, el dominio, los hipervinculos, los videos, las animaciones, los archivos de audio...
                </p>
                <router-link to="/elementos-de-una-pagina-web" class="bg-purple-300 text-xl p-3 py-2 ml-1 rounded-md hover:bg-gray-300"> <span class="hover:underline"> Ver mas </span>>> </router-link>
            </div>
            <!--Como crear una pagina web -->
            <div class="p-2">
                <img src="../assets/como-crear-una-pagina- web.jpg" alt="crear-pagina-web" class="w-full">
                <h3 class="text-xl lg:text-2xl p-2 font-bold text-blue-900">Como crear una página web</h3>
                <p class="text-justify p-3 mb-3">
                    Cómo crear una página web con dominio es probablemente la primera pregunta que se plantea todo nuevo webmaster. Después de todo, la base que uses para crear un sitio web determinará el flujo y el crecimiento un proyecto online...
                </p>
                <router-link to="/Como-crear-una-pagina-webb" class="bg-purple-300 text-xl p-3 py-2 ml-1 rounded-md hover:bg-gray-300"> <span class="hover:underline"> Ver mas </span>>> </router-link>
            </div>
        </main>
    </div>
</template>

<script>

export default {
  name: 'Contenido',
  components: {
    
  }
}
</script>
