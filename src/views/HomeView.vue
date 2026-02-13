<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <section class="min-h-screen mb-10 mt-3 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 rounded-4xl shadow-lg border border-slate-700/50 backdrop-blur-md p-0.5">
        <div class="max-w-4xl mx-auto py-20">

            <!-- INTRO -->
            <header class="mb-25 animate-fade-in">
                <div class="mb-8">
                    <span class="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">✨ Bienvenue</span>
                    <h1 class="text-6xl md:text-7xl font-black py-3 tracking-tighter bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                        Web Designer
                    </h1>
                    <p class="text-xl text-slate-400 font-light">Design • Web • Innovation</p>
                </div>

                <div class="w-32 h-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 mb-8 rounded-full"></div>

                <p class="text-lg text-slate-300 leading-relaxed max-w-2xl">
                    Explorez un univers de création numérique où chaque pixel compte.
                    Des solutions de design innovantes pour transformer vos idées en réalité.
                </p>
            </header>

            <!-- SECTION PROJETS -->
            <section class="mb-17 group relative overflow-hidden rounded-3xl p-8 backdrop-blur-md bg-linear-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div class="absolute -top-32 -right-32 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl group-hover:bg-cyan-400/10 transition-all duration-500"></div>
                <div class="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
                
                <div class="relative z-10">
                    <div class="flex items-start gap-4 mb-6">
                        <div class="w-3 h-14 bg-linear-to-b from-cyan-400 to-blue-600 rounded-full blur-sm"></div>
                        <div>
                            <h2 class="text-4xl font-bold text-slate-100 mb-2">Projets</h2>
                            <p class="text-slate-400">Mes créations</p>
                        </div>
                    </div>

                    <p class="text-slate-300 leading-relaxed max-w-1xl mb-8 ml-6">
                        Découvrez des réalisations conçues en fonction des attentes et des besoins spécifiques de chaque client.
                        Chaque projet s'inscrit dans une démarche réfléchie, alliant exigences fonctionnelles, contraintes techniques et choix de design adaptés.
                    </p>

                    <div class="ml-6 flex justify-end">
                        <RouterLink
                            to="/projects"
                            class="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-linear-to-r from-cyan-600 to-blue-600
                                         text-white font-semibold
                                         hover:from-cyan-500 hover:to-blue-500 
                                         transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/40"
                        >
                            Voir tous les projets
                            <span class="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </RouterLink>
                    </div>
                </div>
            </section>

            <!-- SECTION À PROPOS -->
            <section class="mb-17 group relative overflow-hidden rounded-3xl p-8 backdrop-blur-md bg-linear-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl group-hover:bg-purple-400/10 transition-all duration-500"></div>
                
                <div class="relative z-10">
                    <div class="flex items-start gap-4 mb-6">
                        <div class="w-3 h-14 bg-linear-to-b from-purple-400 to-pink-600 rounded-full blur-sm"></div>
                        <div>
                            <h2 class="text-4xl font-bold text-slate-100 mb-2">À propos</h2>
                            <p class="text-slate-400">Découvrez mon histoire</p>
                        </div>
                    </div>

                    <p class="text-slate-300 leading-relaxed max-w-1xl mb-8 ml-6">
                        Passionné par le design et l'innovation, je crée des expériences numériques captivantes.
                        Mon parcours m'a permis de développer une expertise unique en combinant creativity et rigueur technique.
                    </p>

                    <div class="ml-6 flex justify-end">
                        <RouterLink
                            to="/about"
                            class="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-linear-to-r from-purple-600 to-pink-600
                                         text-white font-semibold
                                         hover:from-purple-500 hover:to-pink-500 
                                         transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/40"
                        >
                            En savoir plus
                            <span class="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </RouterLink>
                    </div>
                </div>
            </section>

            <!-- SECTION CONTACT -->
            <section class="group relative overflow-hidden rounded-3xl p-8 backdrop-blur-md bg-linear-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
                <div class="absolute -top-40 -right-40 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl group-hover:bg-orange-400/10 transition-all duration-500"></div>
                
                <div class="relative z-10">
                    <div class="flex items-start gap-4 mb-6">
                        <div class="w-3 h-14 bg-linear-to-b from-orange-400 to-red-600 rounded-full blur-sm"></div>
                        <div>
                            <h2 class="text-4xl font-bold text-slate-100 mb-2">Collaborons</h2>
                            <p class="text-slate-400">Parlons de votre prochain projet</p>
                        </div>
                    </div>

                    <p class="text-slate-300 leading-relaxed max-w-1xl mb-8 ml-6">
                        Des idées brillantes ? Un projet en tête ? Je suis prêt à donner vie
                        à vos visions les plus ambitieuses avec créativité et expertise.
                    </p>

                    <div class="ml-6 flex justify-end">
                        <RouterLink
                            to="/contact"
                            class="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-linear-to-r from-orange-600 to-red-600
                                         text-white font-semibold
                                         hover:from-orange-500 hover:to-red-500 
                                         transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-orange-500/40"
                        >
                            Me contacter maintenant
                            <span class="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </RouterLink>
                    </div>
                </div>
            </section>

        </div>
    </section>
</template>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.6s ease-out;
}
</style>
