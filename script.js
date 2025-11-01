// Data i hora juntes
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
