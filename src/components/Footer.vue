<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-slate-900 border-t border-slate-700">
    <div class="max-w-7xl mx-auto px-6 py-10">

      <!-- Contenu principal -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        <!-- Identité -->
        <div class="space-y-3">
          <h2 class="text-lg font-semibold text-slate-100 tracking-wide">
            MonPortfolio
          </h2>
          <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
            Portfolio présentant des réalisations conçues en fonction des attentes
            et des besoins spécifiques de chaque client.
          </p>
        </div>

        <!-- Navigation -->
        <nav class="space-y-3 md:justify-self-center">
          <h3 class="text-sm font-semibold text-slate-300 tracking-wide uppercase">
            Navigation
          </h3>

          <ul class="space-y-2 text-sm">
            <li>
              <RouterLink
                to="/"
                class="text-slate-400 hover:text-slate-100 transition"
              >
                Accueil
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/about"
                class="text-slate-400 hover:text-slate-100 transition"
              >
                À propos
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/projets"
                class="text-slate-400 hover:text-slate-100 transition"
              >
                Projets
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="text-slate-400 hover:text-slate-100 transition"
              >
                Contact
              </RouterLink>
            </li>
          </ul>
        </nav>

        <!-- Infos complémentaires -->
        <div class="space-y-3">
          <h3 class="text-sm font-semibold text-slate-300 tracking-wide uppercase">
            Informations
          </h3>

          <p class="text-sm text-slate-400">
            Développement web & intégration front-end
          </p>
          <p class="text-sm text-slate-400">
            Vue.js · Tailwind CSS
          </p>
        </div>

      </div>

      <!-- Séparateur -->
      <div class="border-t border-slate-700 mt-12 pt-6 text-center">
        <p class="text-xs text-slate-500">
          © {{ new Date().getFullYear() }} MonPortfolio — Tous droits réservés
        </p>
      </div>

    </div>
  </footer>
</template>
