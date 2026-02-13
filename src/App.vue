<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const showScrollTop = ref(false)

function handleScroll() {
  showScrollTop.value = window.scrollY > 280
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Header />

  <main class="bg-slate-900/94 min-h-screen pt-24">
    <section class="max-w-7xl mx-auto px-10 py-6">
      <RouterView />
    </section>
  </main>

  <button
    v-if="showScrollTop"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 z-[55] h-11 w-11 rounded-full border border-slate-500 bg-slate-800/95 text-slate-100 shadow-lg transition hover:bg-slate-700"
    aria-label="Remonter en haut"
    title="Remonter en haut"
  >
    ^
  </button>

  <Footer />
</template>
