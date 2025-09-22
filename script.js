// añade mensajes al registro local
function appendLog(msg) {
  const el = document.getElementById('log');
  const time = new Date().toISOString().replace('T',' ').replace('Z','');
  el.innerHTML = `<div>[${time}] ${escapeHtml(msg)}</div>` + el.innerHTML;
}

// sanitizar entradas
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, function(m){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m];
  });
}

// manejar el login (simulación)
function handleLogin(ev) {
  ev.preventDefault();
  const user = document.getElementById('user').value.trim();
  const pass = document.getElementById('pass').value;

  appendLog(`Intento de inicio de sesión con usuario="${user}" y contraseña longitud=${pass.length}`);
  console.log('[SIMULACIÓN] datos del formulario:', {user, passLength: pass.length});

  alert('AVISO — SIMULACIÓN: Este inicio de sesión es solo para prácticas. Ningún dato se transmite fuera de esta VM.');
  return false;
}

// inicializar eventos
document.getElementById('loginForm').addEventListener('submit', handleLogin);
