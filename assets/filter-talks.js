document.addEventListener('DOMContentLoaded', function () {
  const filterBar = document.getElementById('talks-filter');
  if (!filterBar) return;

  const buttons = Array.from(filterBar.querySelectorAll('[data-filter]'));
  const items = Array.from(document.querySelectorAll('.talk-item'));

  function applyFilter(cat) {
    if (cat === 'all') {
      items.forEach(i => i.style.display = '');
    } else {
      items.forEach(i => {
        const cats = i.dataset.category ? i.dataset.category.split(/\s+/) : [];
        i.style.display = cats.includes(cat) ? '' : 'none';
      });
    }
    buttons.forEach(b => b.classList.toggle('active', b.dataset.filter === cat));
  }

  buttons.forEach(b => b.addEventListener('click', function () {
    applyFilter(this.dataset.filter);
  }));

  // default to 'all'
  applyFilter('all');
});
