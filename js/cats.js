const CATS_PER_PAGE = 12;
let currentFilter = 'all';
let currentSort = 'name';
let currentPage = 1;

function getFiltered() {
  let cats = [...CAT_DATA];
  if (currentFilter !== 'all') cats = cats.filter(c => c.type === currentFilter);
  if (currentSort === 'name') cats.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
  if (currentSort === 'age-asc') cats.sort((a, b) => a.ageYears - b.ageYears);
  if (currentSort === 'age-desc') cats.sort((a, b) => b.ageYears - a.ageYears);
  return cats;
}

function renderCard(cat) {
  const genderLabel = cat.gender === 'female' ? 'Mèo cái' : 'Mèo đực';
  const statusClass = cat.type === 'adopt' ? 'status-adopt' : 'status-foster';
  const statusLabel = cat.type === 'adopt' ? 'Nhận nuôi' : 'Cần nhà tạm';
  const btnClass = cat.type === 'foster' ? 'cat-btn outline' : 'cat-btn';
  const btnLabel = cat.type === 'foster' ? 'Nhận nuôi tạm →' : `Nhận nuôi ${cat.name} →`;
  const tagsHTML = cat.tags.map(t => `<span class="cat-tag">${t}</span>`).join('');

  return `
    <article class="cat-card" data-type="${cat.type}">
      <div class="cat-avatar">
        ${cat.svg}
        <span class="status-badge ${statusClass}">${statusLabel}</span>
      </div>
      <div class="cat-info">
        <div class="cat-name">${cat.name}</div>
        <div class="cat-age">${cat.ageYears} tuổi · ${genderLabel}</div>
        <div class="cat-tags">${tagsHTML}</div>
        <p class="cat-desc">${cat.desc}</p>
        <button class="${btnClass}">${btnLabel}</button>
      </div>
    </article>`;
}

function renderPagination(total, totalPages) {
  const container = document.getElementById('pagination');
  if (totalPages <= 1) { container.innerHTML = ''; return; }

  let html = `<button class="page-btn" onclick="goPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>←</button>`;

  for (let i = 1; i <= totalPages; i++) {
    if (totalPages > 7 && i > 2 && i < totalPages - 1 && Math.abs(i - currentPage) > 1) {
      if (i === 3 || i === totalPages - 2) html += `<span class="page-btn" style="border:none;cursor:default">…</span>`;
      continue;
    }
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
  }

  html += `<button class="page-btn" onclick="goPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>→</button>`;
  container.innerHTML = html;
}

function render() {
  const cats = getFiltered();
  const total = cats.length;
  const totalPages = Math.max(1, Math.ceil(total / CATS_PER_PAGE));
  if (currentPage > totalPages) currentPage = 1;

  const slice = cats.slice((currentPage - 1) * CATS_PER_PAGE, currentPage * CATS_PER_PAGE);

  document.getElementById('cat-grid').innerHTML = slice.map(renderCard).join('');
  document.getElementById('cats-count').textContent =
    `Hiển thị ${slice.length} trong ${total} bé mèo`;
  renderPagination(total, totalPages);
}

function setFilter(type, btn) {
  currentFilter = type;
  currentPage = 1;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

function setSort(val) {
  currentSort = val;
  currentPage = 1;
  render();
}

function goPage(n) {
  currentPage = n;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

document.addEventListener('DOMContentLoaded', render);
