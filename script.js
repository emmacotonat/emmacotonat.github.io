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
