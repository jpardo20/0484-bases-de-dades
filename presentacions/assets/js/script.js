// Carrega el fitxer extern JSON amb la llista de presentacions
async function loadPresentations() {
  try {
    const res = await fetch("presentations.json");
    if (!res.ok) throw new Error("No s'ha pogut carregar presentations.json");
    return await res.json();
  } catch (err) {
    console.error("Error carregant presentacions:", err);
    return [];
  }
}

// Funció de cerca
const byQuery = (q) => (p) => {
  if (!q) return true;
  const hay = (p.title + " " + p.description + " " + (p.tags || []).join(" ")).toLowerCase();
  return hay.includes(q.toLowerCase());
};

// Renderitza la graella de targetes
function render(list) {
  const grid = document.getElementById("presentations-grid");
  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `<p>No s'ha trobat cap presentació amb aquest filtre.</p>`;
    return;
  }

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    const htmlLink = `${p.slug}.html`;
    const mdLink   = `${p.slug}.md`;

    card.innerHTML = `
      <h2>${p.title}</h2>
      <p>${p.description}</p>
      <div class="meta">${(p.tags || []).map(t => `#${t}`).join(" ")}</div>
      <div class="actions">
        <a class="button primary" href="${htmlLink}">Obrir presentació</a>
        <a class="button ghost"   href="${mdLink}" target="_blank" rel="noopener">Veure .md</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Inicialitza el portal
(async () => {
  const presentations = await loadPresentations();
  render(presentations);

  // Cerca en temps real
  const search = document.getElementById("search");
  search?.addEventListener("input", (e) => {
    render(presentations.filter(byQuery(e.target.value)));
  });
})();

/* --- Extracted scripts --- */
const el = (sel) => document.querySelector(sel);
      const grid = el('#grid');
      const searchInput = el('#search');
      const sortSelect = el('#sort');
      let items = [];

      function cardTemplate(item){
        const desc = item.description ? `<p>${item.description}</p>` : '';
        const title = item.title || 'Presentació';
        const qsTitle = encodeURIComponent(title);
        const href = `./presentador.html?src=${encodeURIComponent(item.src)}&title=${qsTitle}${item.theme ? `&theme=${encodeURIComponent(item.theme)}` : ''}`;
        return `<article class="card">
                  <h2>${title}</h2>
                  ${desc}
                  <p><a class="button primary" href="${href}">Obrir presentació</a></p>
                </article>`;
      }

      function render(list){
        grid.innerHTML = list.map(cardTemplate).join('\n');
      }

      function applyFilters(){
        const q = searchInput.value.toLowerCase().trim();
        let list = items.filter(it => (it.title||'').toLowerCase().includes(q) || (it.description||'').toLowerCase().includes(q));
        const mode = sortSelect.value;
        list.sort((a,b)=>{
          if(mode==='title') return (a.title||'').localeCompare(b.title||'');
          return (a.order||9999) - (b.order||9999);
        });
        render(list);
      }

      searchInput.addEventListener('input', applyFilters);
      sortSelect.addEventListener('change', applyFilters);

      fetch('presentacions.json')
        .then(r => r.json())
        .then(data => { items = data.presentations || []; applyFilters(); })
        .catch(err => {
          grid.innerHTML = '<p>No s\'ha pogut carregar el llistat de presentacions.</p>';
          console.error(err);
        });
const params = new URLSearchParams(location.search);
      const src   = params.get('src');
      const title = params.get('title') || 'Presentació';
      const theme = params.get('theme');
      const sep   = params.get('sep');
      const vsep  = params.get('vsep');
      const nsep  = params.get('notes');

      document.title = title;
      document.getElementById('topbar-title').textContent = title;
      if (theme) document.getElementById('theme').href = `https://unpkg.com/reveal.js/dist/theme/${theme}.css`;
      const sec = document.getElementById('md-section');
      if (src) sec.setAttribute('data-markdown', src);
      if (sep)  sec.setAttribute('data-separator', sep);
      if (vsep) sec.setAttribute('data-separator-vertical', vsep);
      if (nsep) sec.setAttribute('data-separator-notes', nsep);

      const deck = new Reveal({
        hash: true,
        plugins: [ RevealMarkdown, RevealHighlight ],
        slideNumber: params.get('slideNumber') === 'true',
        controls: params.get('controls') !== 'false',
        progress: params.get('progress') !== 'false',
        center: params.get('center') !== 'false'
      });
      deck.initialize();

      // Ajustar alçada topbar dinàmicament
      function setTopbarHeight() {
        const tb = document.querySelector('.topbar');
        const h = tb ? tb.offsetHeight : 0;
        document.documentElement.style.setProperty('--topbar-h', h + 'px');
      }
      window.addEventListener('DOMContentLoaded', setTopbarHeight);
      window.addEventListener('resize', setTopbarHeight);
      const obs = new MutationObserver(setTopbarHeight);
      obs.observe(document.querySelector('.topbar'), { childList: true, subtree: true, characterData: true });