<script setup>
import { ref } from 'vue'
import projects from '../data/data.json'
import ProjectCard from '../components/Project.vue'
import ProjectModal from '../components/ProjectModal.vue'

const selectedProject = ref(null)

console.log('Projets chargés:', projects)
</script>

<template>
  <section class="space-y-8 p-6">
    <div v-if="!projects || projects.length === 0" class="text-slate-400">
      Aucun projet trouvé
    </div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @click="selectedProject = project"
      />
    </div>

    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </section>
</template>
