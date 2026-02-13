<template>
  <section class="relative min-h-[72vh] overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950 p-6 md:p-10">
    <div class="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
    <div class="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>

    <div class="relative mx-auto max-w-6xl">
      <header class="mb-10 border-b border-slate-800 pb-8">
        <p class="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200">
          A propos
        </p>
        <h1 class="max-w-4xl text-4xl font-black leading-tight text-slate-100 md:text-6xl">
          Parcours et vision
        </h1>
      </header>

      <div class="grid gap-8 lg:grid-cols-[330px_minmax(0,1fr)]">
        <aside class="space-y-6">
          <div class="group overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4">
            <div class="flex aspect-[4/5] items-center justify-center rounded-xl border-2 border-dashed border-slate-600 bg-slate-950/70 text-center">
              <div>
                <p class="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">Photo</p>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Parcours</p>
            <ul class="mt-4 space-y-3 text-sm text-slate-200">
              <li class="flex items-center justify-between rounded-lg border border-slate-700/80 bg-slate-950/60 px-3 py-2">
                <span>HEPL</span>
                <span class="text-slate-400">2019 - 2024</span>
              </li>
              <li class="flex items-center justify-between rounded-lg border border-slate-700/80 bg-slate-950/60 px-3 py-2">
                <span>IFOSUP</span>
                <span class="text-slate-400">2024 - 2026</span>
              </li>
            </ul>
          </div>
        </aside>

        <article class="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-6 md:p-10">
          <div class="space-y-6 text-base leading-8 text-slate-200 md:text-lg">
            <p>
              Je me suis d&#8217;abord orient&#233; vers l&#8217;informatique de gestion, avec cinq ann&#233;es
              d&#8217;&#233;tudes &#224; la HEPL. M&#234;me si je n&#8217;ai pas finalis&#233; ce parcours, il m&#8217;a permis de
              d&#233;velopper une vraie compr&#233;hension du code, des bases de donn&#233;es et de la logique derri&#232;re
              un site web. Cette base technique m&#8217;accompagne encore aujourd&#8217;hui dans ma mani&#232;re de concevoir.
            </p>

            <p>
              Avec le temps, je me suis rendu compte que ce qui m&#8217;animait vraiment, ce n&#8217;&#233;tait pas
              seulement le fonctionnement d&#8217;un site, mais la mani&#232;re dont on le construit pour qu&#8217;il
              parle aux gens. C&#8217;est ce qui m&#8217;a amen&#233; &#224; me former en web design &#224; l&#8217;IFOSUP.
            </p>

            <p>
              L&#224;, j&#8217;ai appris &#224; penser un site comme une exp&#233;rience: guider le regard, structurer
              l&#8217;information, raconter une histoire, donner envie de continuer la lecture et amener naturellement
              l&#8217;utilisateur l&#224; o&#249; il doit arriver. J&#8217;y ai aussi d&#233;velopp&#233; mes comp&#233;tences en identit&#233;
              visuelle, en r&#233;f&#233;rencement, en accessibilit&#233; et en gestion de sites WordPress.
            </p>

            <p class="border-l-2 border-cyan-300/60 pl-5 text-slate-100">
              Aujourd&#8217;hui, je combine cette sensibilit&#233; cr&#233;ative avec ma base technique pour cr&#233;er des
              sites coh&#233;rents, r&#233;fl&#233;chis et pens&#233;s autant pour l&#8217;utilisateur que pour les objectifs du projet.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
