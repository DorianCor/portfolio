<script setup>
defineProps({
  project: Object
})

const emit = defineEmits(['click'])
</script>

<template>
  <div
    v-if="project"
    @click="emit('click')"
    class="h-full flex flex-col cursor-pointer rounded-xl border border-slate-700 bg-slate-800/50 p-6 hover:bg-slate-700/70 hover:border-slate-500 transition hover:shadow-lg"
  >
    <h3 class="min-h-[3.5rem] flex items-center justify-center text-xl font-semibold leading-tight text-slate-100 mb-3 text-center">
      {{ project.title }}
    </h3>
    <img
      v-if="project.images && project.images[0]"
      :src="project.images[0]"
      :alt="project.title"
      class="w-full h-48 object-contain rounded-lg mb-5"
    />
    <div
      v-else
      class="w-full h-48 rounded-lg mb-5 border border-slate-600/40 bg-slate-700/20"
    />
    <p class="text-slate-400 text-sm mb-4 min-h-[3.75rem]">
      {{ project.shortDescription }}
    </p>

    <div v-if="project.technologies" class="mt-auto flex flex-wrap gap-2">
      <span
        v-for="tech in project.technologies"
        :key="tech"
        class="text-xs px-3 py-2 rounded-2xl bg-slate-700 text-slate-300"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>
