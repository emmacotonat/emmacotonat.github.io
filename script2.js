function updateDateTime(){
  const now = new Date();
  const date = now.toLocaleDateString('en-GB'); // format dd/mm/yyyy
  const time = now.toLocaleTimeString('en-GB', { hour12: false });
  document.getElementById('datetime').textContent = `${date}, ${time}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();
