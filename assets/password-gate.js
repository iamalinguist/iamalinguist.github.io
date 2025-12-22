document.addEventListener('DOMContentLoaded', function(){
  const PASSWORD = 'changeme'; // <-- replace with your password

  // Hide all existing body children first to avoid exposing content.
  // Use `visibility: hidden` rather than `display: none` so the
  // document layout (margins/spacing) remains the same when restored.
  const body = document.body;
  const originalVisibility = new Map();
  const children = Array.from(body.children);
  children.forEach(el => {
    originalVisibility.set(el, el.style.visibility || '');
    el.style.visibility = 'hidden';
  });

  // Build the gate overlay dynamically
  const overlay = document.createElement('div');
  overlay.id = 'password-gate';
  Object.assign(overlay.style, {
    position: 'fixed', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(0,0,0,0.85)', zIndex: '9999'
  });

  overlay.innerHTML = `
    <div style="background:#fff;padding:24px;border-radius:8px;max-width:420px;width:100%;box-shadow:0 6px 24px rgba(0,0,0,.5);text-align:center;">
      <h2 style="margin:0 0 12px;font-size:18px;">Protected page</h2>
      <p style="margin:0 0 12px;color:#444;font-size:14px;">Enter the password to view these documents.</p>
      <input id="pg-password" type="password" placeholder="Password" style="width:100%;padding:8px;margin-bottom:8px;box-sizing:border-box;" />
      <div style="display:flex;gap:8px;justify-content:flex-end;">
        <button id="pg-submit" style="padding:8px 12px;">Unlock</button>
      </div>
      <p style="margin-top:12px;font-size:12px;color:#666;">only eligible entries!</p>
    </div>
  `;

  body.appendChild(overlay);

  const input = overlay.querySelector('#pg-password');
  const btn = overlay.querySelector('#pg-submit');

  function restore() {
    // remove overlay and restore original display values
    overlay.remove();
    originalVisibility.forEach((val, el) => { el.style.visibility = val; });
    if(input) input.value = '';
  }

  function unlock(p){
    if(p === PASSWORD){
      restore();
    } else {
      alert('Incorrect password');
      if(input) { input.value = ''; input.focus(); }
    }
  }

  if(btn){ btn.addEventListener('click', () => unlock(input.value)); }
  if(input){ input.addEventListener('keydown', function(e){ if(e.key === 'Enter') unlock(input.value); }); }

});
