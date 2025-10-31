// Rellotge i data en temps real (Europe/Madrid)
function updateClock(){
  const el = document.getElementById('clock');
  const now = new Date();
  // Format europeu amb zona Madrid
  const dateFmt = new Intl.DateTimeFormat('ca-ES', {
    weekday: 'short', day: '2-digit', month: 'short', year: 'numeric',
    timeZone: 'Europe/Madrid'
  });
  const timeFmt = new Intl.DateTimeFormat('ca-ES', {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false, timeZone: 'Europe/Madrid'
  });
  el.textContent = `${dateFmt.format(now)} · ${timeFmt.format(now)}`;
}
updateClock();
setInterval(updateClock, 1000);

// Data i hora en format 31/10/2025 00:58:05
function updateDateTime() {
  const el = document.getElementById("datetime");
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  el.textContent = `${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
