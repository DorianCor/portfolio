<script setup>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSending = ref(false)
const feedback = ref('')
const feedbackType = ref('info')

const EMAILJS_SERVICE_ID = (import.meta.env.VITE_EMAILJS_SERVICE_ID || '').trim()
const EMAILJS_TEMPLATE_ID = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '').trim()
const EMAILJS_PUBLIC_KEY = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '').trim()

function resetForm() {
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}

async function submitContact() {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    const missing = []
    if (!EMAILJS_SERVICE_ID) missing.push('VITE_EMAILJS_SERVICE_ID')
    if (!EMAILJS_TEMPLATE_ID) missing.push('VITE_EMAILJS_TEMPLATE_ID')
    if (!EMAILJS_PUBLIC_KEY) missing.push('VITE_EMAILJS_PUBLIC_KEY')
    feedbackType.value = 'error'
    feedback.value = `Configuration EmailJS manquante: ${missing.join(', ')}. Ajoute ces variables dans .env puis redemarre le serveur.`
    return
  }

  isSending.value = true
  feedback.value = ''

  const templateParams = {
    to_email: 'dodoco44@gmail.com',
    from_name: form.name,
    reply_to: form.email,
    subject: form.subject,
    message: form.message
  }

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    feedbackType.value = 'success'
    feedback.value = 'Message envoye avec succes.'
    resetForm()
  } catch (error) {
    console.error('EmailJS send failed:', error)
    const reason = error?.text || error?.message || (error?.status ? `status ${error.status}` : 'erreur inconnue')
    feedbackType.value = 'error'
    feedback.value = `Echec de l'envoi: ${reason}`
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <section class="relative min-h-[75vh] overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/80 p-6 md:p-10">
    <div class="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
    <div class="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

    <div class="relative mx-auto max-w-6xl">
      <header class="mb-8 border-b border-slate-700/60 pb-8">
        <p class="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-200">
          Contact
        </p>
        <h1 class="mt-4 text-4xl font-bold text-slate-100 md:text-5xl">Parlons de votre projet</h1>
        <p class="mt-3 max-w-3xl text-slate-300">
          Vous pouvez m'envoyer les grandes lignes de vos besoins, vos timing et vos objectifs. Je vous repondrai
          avec une proposition claire et concrete.
        </p>
      </header>

      <div class="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div class="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 md:p-8">
          <form class="space-y-5" @submit.prevent="submitContact">
            <div>
              <label for="name" class="mb-2 block text-sm font-medium text-slate-300">Nom</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-slate-400 focus:outline-none"
                placeholder="Ton nom"
              />
            </div>

            <div>
              <label for="email" class="mb-2 block text-sm font-medium text-slate-300">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-slate-400 focus:outline-none"
                placeholder="ton@email.com"
              />
            </div>

            <div>
              <label for="subject" class="mb-2 block text-sm font-medium text-slate-300">Sujet</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-slate-400 focus:outline-none"
                placeholder="Sujet du message"
              />
            </div>

            <div>
              <label for="message" class="mb-2 block text-sm font-medium text-slate-300">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="7"
                class="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-slate-400 focus:outline-none"
                placeholder="Ecris ton message ici..."
              />
            </div>

            <div class="flex items-center justify-between gap-4">
              <p
                v-if="feedback"
                class="text-sm"
                :class="feedbackType === 'success' ? 'text-emerald-300' : 'text-rose-300'"
              >
                {{ feedback }}
              </p>
              <button
                type="submit"
                :disabled="isSending"
                class="rounded-xl border border-slate-500 bg-slate-100 px-5 py-3 font-semibold text-slate-900 transition hover:bg-white"
              >
                {{ isSending ? 'Envoi...' : 'Envoyer' }}
              </button>
            </div>
          </form>
        </div>

        <aside class="space-y-6">
          <div class="rounded-2xl border border-slate-700/70 bg-slate-950/50 p-5">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Reponse</p>
            <p class="mt-2 text-lg font-semibold text-slate-100">Rapide</p>
            <p class="mt-2 text-sm text-slate-300">En general sous 24 a 48h selon la charge.</p>
          </div>

          <div class="rounded-2xl border border-slate-700/70 bg-slate-950/50 p-5">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Projets</p>
            <p class="mt-2 text-lg font-semibold text-slate-100">Sites vitrine</p>
            <p class="mt-2 text-sm text-slate-300">Identite, UX et developpement web sur mesure.</p>
          </div>

          <div class="rounded-2xl border border-slate-700/70 bg-slate-950/50 p-5">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Collaboration</p>
            <p class="mt-2 text-lg font-semibold text-slate-100">A distance</p>
            <p class="mt-2 text-sm text-slate-300">Belgique et international, selon les besoins.</p>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
