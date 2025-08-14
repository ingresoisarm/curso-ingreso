
// Accessible accordion behavior for the Cupos panel
(function(){
  const btn = document.getElementById('btn-cupos');
  const panel = document.getElementById('panel-cupos');
  if(!btn || !panel) return;
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    panel.hidden = expanded;
  });
})();
