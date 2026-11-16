<script setup lang="ts">
const official = 'https://kgtpapez.si'
const site = official + '/index.php/sl'
const calendar = site + '/koledar-tekov-2025'
const navigation = [
  { label: 'Prireditve', href: '#prireditve' },
  { label: 'Treningi', href: '#treningi' },
  { label: 'Novice', href: '#novice' },
  { label: 'O klubu', href: '#klub' },
  { label: 'Kontakt', href: '#kontakt' }
]

const results = [
  {
    title: 'Sv. Primož in Velika planina',
    date: '2026-04-11',
    dateLabel: '11. april 2026',
    image: '/images/sv-primoz-01.jpg',
    description: 'Gorska teka s startom v Stahovici.',
    href: official + '/images/REZULTATIVSIPrimozVelikaplanina.pdf'
  },
  {
    title: 'Tek na Stari grad',
    date: '2026-04-18',
    dateLabel: '18. april 2026',
    image: '/images/stari-grad-01.jpg',
    description: 'Gorski tek v disciplini gor–dol nad Kamnikom.',
    href: official + '/images/jce/dokumenti/Rezultati_absolutno.pdf'
  }
]

const news = [
  { date: '2026-11-06', label: '6. november 2026', title: 'Jože Marolt na maratonu v Sydneyju', text: 'Klubski tekač je osvojil 32. mesto v svoji veteranski kategoriji.' },
  { date: '2026-10-01', label: '1. oktober 2026', title: 'Tekaški vikend na Šmarni gori', text: 'Tekači KGT Papež so nastopili na Rekordu Šmarne gore in zaključni tekmi pokala.' },
  { date: '2026-09-30', label: '30. september 2026', title: 'Najmlajši na dnevu športa', text: 'Mladi tekači in trenerki so predstavili klub na dnevu športa v Kamniku.' }
]

const menuOpen = ref(false)
const menuButton = ref<HTMLButtonElement>()
function closeMenu() {
  menuOpen.value = false
  menuButton.value?.focus()
}
</script>

<template>
  <a class="skip" href="#vsebina">Preskoči na vsebino</a>
  <header class="site-header" @keydown.esc="menuOpen && closeMenu()">
    <div class="wrap header-inner">
      <a href="#vrh" class="brand" aria-label="KGT Papež, začetek strani">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none"><path d="M4 24 14 8l12 16H4Zm12-12 4-5 8 12M10 16l4 3 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <span>KGT PAPEŽ<small>KAMNIK · SLOVENIJA</small></span>
      </a>
      <button ref="menuButton" class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="navigacija" @click="menuOpen = !menuOpen">
        {{ menuOpen ? 'Zapri meni' : 'Meni' }}
      </button>
      <nav id="navigacija" :class="{ open: menuOpen }" aria-label="Glavna navigacija">
        <a v-for="item in navigation" :key="item.href" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
        <a class="button button-red" href="#vclanitev" @click="menuOpen = false">Pridruži se <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>

  <main id="vsebina" tabindex="-1">
    <section id="vrh" class="hero" aria-labelledby="hero-naslov">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <p class="eyebrow"><span></span> Klub gorskih tekačev Papež</p>
          <h1 id="hero-naslov">Skupaj<br>v <em>hrib.</em></h1>
          <p class="intro">Gorski tek v Kamniku in pod Kamniško-Savinjskimi Alpami. Od prvih tekaških korakov do tekmovanj v gorah.</p>
          <div class="actions">
            <a class="button button-red" href="#vclanitev">Pridruži se klubu <span aria-hidden="true">↗</span></a>
            <a class="button button-outline" href="#prireditve">Koledar tekov <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <figure class="hero-photo">
          <img src="/images/trail-vp-gore.jpg" alt="Tekači se vzpenjajo po kamniti poti na Veliki planini z gorami v ozadju." width="2048" height="1365" fetchpriority="high">
          <figcaption><span aria-hidden="true">⌖</span> Velika planina, Kamniško-Savinjske Alpe</figcaption>
        </figure>
      </div>
    </section>

    <div class="quick">
      <div class="wrap quick-grid">
        <a href="#prireditve"><span>Koledar tekov</span><span aria-hidden="true">↗</span></a>
        <a href="#rezultati"><span>Rezultati tekem</span><span aria-hidden="true">↗</span></a>
        <a href="#treningi"><span>Vadba za mlade</span><span aria-hidden="true">↗</span></a>
      </div>
    </div>

    <section id="prireditve" class="wrap section">
      <div class="section-heading">
        <div><p class="eyebrow">Sezona 2026</p><h2>Prireditve in rezultati</h2></div>
        <a class="text-link" :href="calendar">Celoten koledar 2026 <span aria-hidden="true">↗</span></a>
      </div>
      <div class="event-callout">
        <time datetime="2026-12-05"><strong>05</strong><span>DEC 2026</span></time>
        <div><h3>23. Miklavžev tek</h3><p>V koledarju Tekaškega pokala Občine Kamnik · organizator ŠD Šmartno</p></div>
        <a class="text-link" :href="calendar">Termin v koledarju <span aria-hidden="true">↗</span></a>
      </div>
      <h3 id="rezultati" class="subheading">Rezultati tekem 2026</h3>
      <div class="result-grid">
        <article v-for="race in results" :key="race.title" class="card">
          <img :src="race.image" alt="" loading="lazy" width="640" height="320">
          <div class="card-content">
            <time :datetime="race.date">{{ race.dateLabel }}</time>
            <h4>{{ race.title }}</h4>
            <p>{{ race.description }}</p>
            <a class="text-link" :href="race.href" :aria-label="'Rezultati: ' + race.title + ' (PDF)'">Rezultati (PDF) <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </div>
      <a class="text-link archive" :href="site + '/ostale-prireditve/grintovec'">Arhiv teka na Grintovec <span aria-hidden="true">↗</span></a>
    </section>

    <section id="treningi" class="training">
      <div class="wrap section training-grid">
        <div>
          <p class="eyebrow">Vadba v Kamniku</p>
          <h2>Treningi za<br>otroke in mladino</h2>
          <p class="intro">Izhodišče vadbe je OŠ Stranje. Za aktualne termine, razporeditev v skupine in vpis pokliči Špelo.</p>
          <a class="button button-red" href="tel:+38631421248">Špela · 031 421 248</a>
        </div>
        <dl class="groups">
          <div><dt>Najmlajši</dt><dd>Gibanje, športne igre in prvi atletski koraki.</dd></div>
          <div><dt>Otroci in mladina</dt><dd>Tehnika teka, razvoj hitrosti in moči ter priprava na tekme.</dd></div>
          <div><dt>Mladinska skupina</dt><dd>Usmerjena vadba za srednješolce, ki trenirajo za tekmovanja.</dd></div>
        </dl>
      </div>
    </section>

    <section id="novice" class="wrap section">
      <div class="section-heading"><h2>Iz kluba</h2><a class="text-link" :href="site + '/'">Vse novice <span aria-hidden="true">↗</span></a></div>
      <div class="news-grid">
        <article v-for="item in news" :key="item.title">
          <time :datetime="item.date">{{ item.label }}</time>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="club" id="klub">
      <div class="wrap section club-grid">
        <div><p class="eyebrow">KGT Papež</p><h2>Gorski tek doma v Kamniku</h2><p>V klubu povezujemo gorske tekače, treniramo mlade in soustvarjamo tekaške prireditve v okolici Kamnika. Del klubske zgodovine je tudi dvajset izvedb gorskega teka na Grintovec.</p><a class="text-link" :href="site + '/kgt-papez'">Zgodovina kluba <span aria-hidden="true">↗</span></a></div>
        <div id="vclanitev" class="join"><h3>Pridruži se klubu</h3><p>Piši nam za informacije o včlanitvi. Za vpis potrebuješ izpolnjeno in podpisano izjavo o članstvu.</p><a class="button button-red" href="mailto:kgtpapez@gmail.com?subject=V%C4%8Dlanitev%20v%20KGT%20Pape%C5%BE">Piši nam za včlanitev <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
  </main>

  <footer id="kontakt">
    <div class="wrap footer-grid">
      <div><h2>KGT Papež</h2><address>Klub gorskih tekačev Papež<br>Podjelše 2, 1241 Kamnik</address></div>
      <div><h3>Kontakt</h3><a href="mailto:kgtpapez@gmail.com">kgtpapez@gmail.com</a><a href="tel:+38641683016">Dušan · 041 683 016</a><a href="tel:+38631421248">Špela · 031 421 248</a></div>
      <div><h3>Povezave</h3><a :href="site + '/kontakt'">Uradna kontaktna stran</a><a href="#vrh">Na vrh strani ↑</a></div>
    </div>
  </footer>
</template>
