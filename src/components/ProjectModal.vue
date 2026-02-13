<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  project: Object
})

const emit = defineEmits(['close'])
const currentImageIndex = ref(0)
const isImageZoomed = ref(false)

const linkEntries = computed(() => {
  const links = props.project?.links
  if (!links) return []

  if (typeof links === 'string') {
    return [{ label: 'Lien', url: links }]
  }

  if (Array.isArray(links)) {
    return links
      .map((item, index) => {
        if (typeof item === 'string') {
          return { label: `Lien ${index + 1}`, url: item }
        }

        if (item && typeof item === 'object') {
          return {
            label: item.label || item.name || `Lien ${index + 1}`,
            url: item.url || item.href || ''
          }
        }

        return null
      })
      .filter((entry) => entry && entry.url)
  }

  if (typeof links === 'object') {
    return Object.entries(links)
      .filter(([, url]) => Boolean(url))
      .map(([key, url]) => ({
        label: formatLinkLabel(key),
        url: typeof url === 'string' ? url : ''
      }))
      .filter((entry) => entry.url)
  }

  return []
})

const projectImages = computed(() => {
  const images = props.project?.images
  return Array.isArray(images) ? images.filter(Boolean) : []
})

const currentImage = computed(() => {
  if (!projectImages.value.length) return ''
  return projectImages.value[currentImageIndex.value] || projectImages.value[0]
})

function formatLinkLabel(key) {
  return key
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

function normalizeUrl(url) {
  if (!url) return '#'
  return /^https?:\/\//i.test(url) ? url : `https://${url}`
}


//Slider
function prevImage() {
  if (!projectImages.value.length) return
  currentImageIndex.value =
    (currentImageIndex.value - 1 + projectImages.value.length) % projectImages.value.length
}

function nextImage() {
  if (!projectImages.value.length) return
  currentImageIndex.value = (currentImageIndex.value + 1) % projectImages.value.length
}

function setImage(index) {
  currentImageIndex.value = index
}

function openImageZoom() {
  if (!currentImage.value) return
  isImageZoomed.value = true
}

function closeImageZoom() {
  isImageZoomed.value = false
}

watch(
  () => props.project,
  () => {
    currentImageIndex.value = 0
    isImageZoomed.value = false
  }
)
</script>

<template>
  <div class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-slate-900 rounded-2xl p-8 max-w-[80rem] w-full relative border border-slate-700/70 shadow-2xl">
      <!-- CLOSE BUTTON -->
      <button
        @click="emit('close')"
        class="absolute top-4 right-4 text-slate-400 hover:text-slate-100 transition-colors"
      >
        X
      </button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <!-- COL 1 (LEFT) - Informations du projet -->
        <div class="space-y-6">
          <!-- TITLE -->
          <h2 class="text-2xl font-bold text-slate-100 mb-4">
            {{ project.title }}
          </h2>

          <section class="rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800/70 to-slate-900/70 p-5">
            <!-- DESCRIPTION -->
            <p class="text-xs uppercase tracking-[0.18em] text-slate-400 mb-3">Description</p>
            <p class="text-slate-200 leading-relaxed text-[1.02rem]">
              {{ project.description }}
            </p>
          </section>

          <section v-if="linkEntries.length" class="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
            <!-- LIENS -->
            <h3 class="text-sm uppercase tracking-wide text-slate-400 mb-3">Liens du projet</h3>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="link in linkEntries"
                :key="`${link.label}-${link.url}`"
                :href="normalizeUrl(link.url)"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-slate-700/80 text-slate-100 border border-slate-600 hover:bg-slate-600 hover:border-slate-500 transition"
              >
                {{ link.label }}
              </a>
            </div>
          </section>

          <!-- Technologies utilisées -->
          <div v-if="project.technologies" class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>


        <!-- IMAGES -->

        <div class="w-full h-full flex flex-col gap-4 md:pt-12">
          <!-- Affichage de l'image courante -->
          <div v-if="projectImages.length" class="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
            <div class="rounded-lg border border-slate-500/40 p-4 bg-[linear-gradient(45deg,rgba(248,250,252,0.08)_25%,transparent_25%,transparent_50%,rgba(248,250,252,0.08)_50%,rgba(248,250,252,0.08)_75%,transparent_75%,transparent)] bg-[length:14px_14px] bg-slate-700/30">
              <img
                :src="currentImage"
                :alt="`${project.title} image ${currentImageIndex + 1}`"
                class="block mx-auto w-auto max-w-[78%] max-h-[44vh] object-contain rounded-lg drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)] cursor-zoom-in"
                @click="openImageZoom"
              />
            </div>

            <div
              v-if="projectImages.length > 1"
              class="mt-4 flex items-center justify-center gap-3"
            >
              <button
                @click="prevImage"
                class="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-600 text-slate-100 hover:bg-slate-800 transition"
                aria-label="Image precedente"
              >
                &lt;
              </button>
              <div class="rounded-full bg-slate-900/85 border border-slate-600 px-3 py-1 text-xs text-slate-200">
                {{ currentImageIndex + 1 }} / {{ projectImages.length }}
              </div>
              <button
                @click="nextImage"
                class="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-600 text-slate-100 hover:bg-slate-800 transition"
                aria-label="Image suivante"
              >
                &gt;
              </button>
            </div>
          </div>
          <div
            v-else
            class="w-full min-h-[260px] rounded-xl border border-dashed border-slate-700 text-slate-500 flex items-center justify-center"
          >
            Aucune image disponible
          </div>

          <!-- Miniatures des images -->
          <div v-if="projectImages.length > 1" class="grid grid-cols-4 sm:grid-cols-5 gap-2">
            <!-- Récipération des différentes images / Parcours mon tableau d'images -->
            <button
              v-for="(image, index) in projectImages"
              :key="`${image}-${index}`"
              @click="setImage(index)"
              class="overflow-hidden rounded-lg border transition"
              :class="index === currentImageIndex ? 'border-slate-300' : 'border-slate-700 hover:border-slate-500'"
            >
              <img
                :src="image"
                :alt="`${project.title} miniature ${index + 1}`"
                class="w-full h-16 object-contain p-1 bg-slate-300/20"
              />
            </button>
          </div>

          <!-- Informations supplémentaires -->
          <div class="grid grid-cols-2 gap-2 text-center" v-if="project.role || project.year">
            <!-- Role -->
            <div v-if="project.role" class="rounded-lg bg-slate-800/60 border border-slate-700 py-3 px-2">
              <p class="text-xs uppercase tracking-wide text-slate-400">Role</p>
              <p class="text-sm text-slate-100 mt-1">{{ project.role }}</p>
            </div>
            <!-- Année projet -->
            <div v-if="project.year" class="rounded-lg bg-slate-800/60 border border-slate-700 py-3 px-2">
              <p class="text-xs uppercase tracking-wide text-slate-400">Annee</p>
              <p class="text-sm text-slate-100 mt-1">{{ project.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="isImageZoomed"
    class="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm p-6 flex items-center justify-center"
    @click.self="closeImageZoom"
  >
    <button
      @click="closeImageZoom"
      class="absolute top-5 right-5 text-slate-200 hover:text-white text-xl"
      aria-label="Fermer le zoom"
    >
      X
    </button>
    <img
      :src="currentImage"
      :alt="`${project.title} image agrandie ${currentImageIndex + 1}`"
      class="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
    />
  </div>
</template>
