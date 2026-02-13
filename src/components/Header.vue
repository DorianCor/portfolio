<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="fixed top-0 w-full bg-slate-900/95 backdrop-blur border-b border-slate-600 shadow-sm z-50">
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

      <!-- Logo -->
      <RouterLink to="/" class="inline-flex items-center px-5" aria-label="Retour a l'accueil">
        <img
          src="/LogoCreadox/LogoComplet_BL.svg"
          alt="Logo Creadox"
          class="h-10 w-auto object-contain"
        />
      </RouterLink>

      <!-- Navigation -->
      <div class="flex gap-8">
        <RouterLink
          to="/"
          class="relative px-4 py-2 text-slate-200 font-semibold tracking-wide transition hover:text-slate-100 after:absolute after:left-4 after:bottom-1 after:w-0 after:h-[2px] after:bg-stone-300 after:transition-all hover:after:w-[calc(100%-2rem)]"
        >
          Accueil
        </RouterLink>
        <RouterLink
          to="/about"
          class="relative px-4 py-2 text-slate-200 font-semibold tracking-wide transition hover:text-slate-100 after:absolute after:left-4 after:bottom-1 after:w-0 after:h-[2px] after:bg-stone-300 after:transition-all hover:after:w-[calc(100%-2rem)]"
        >
          À propos
        </RouterLink>
        <RouterLink
          to="/projets"
          class="relative px-4 py-2 text-slate-200 font-semibold tracking-wide transition hover:text-slate-100 after:absolute after:left-4 after:bottom-1 after:w-0 after:h-[2px] after:bg-stone-300 after:transition-all hover:after:w-[calc(100%-2rem)]"
        >
          Projets
        </RouterLink>
        <RouterLink
          to="/contact"
          class="relative px-4 py-2 text-slate-200 font-semibold tracking-wide transition hover:text-slate-100 after:absolute after:left-4 after:bottom-1 after:w-0 after:h-[2px] after:bg-stone-300 after:transition-all hover:after:w-[calc(100%-2rem)]"
        >
          Contact
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
