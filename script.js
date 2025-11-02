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

// ENQUESTA
(function initPoll() {
  const STORAGE_KEY = 'poll_debug_society';
  const pollYesBtn = document.getElementById('poll-yes');
  const pollNoBtn = document.getElementById('poll-no');
  const pollButtons = document.querySelector('.poll-buttons');
  const pollResults = document.getElementById('poll-results');
  const pollResultYes = document.getElementById('poll-result-yes');
  const pollResultNo = document.getElementById('poll-result-no');

  // Cargar resultados guardados
  function loadPollData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return { yes: 0, no: 0, voted: false };
  }

  // Guardar resultados
  function savePollData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  // Actualizar visualización de resultados (siempre muestra 87% said yes)
  function updatePollDisplay(data) {
    const total = data.yes + data.no;
    if (total === 0) return;

    // Valores fijos: 87% yes, 13% no
    const yesPercent = 87;
    const noPercent = 13;

    pollResultYes.style.width = `${yesPercent}%`;
    pollResultNo.style.width = `${noPercent}%`;
    
    // Siempre mostrar "87% said yes" en la barra ganadora
    pollResultYes.textContent = `${yesPercent}% said yes`;
    pollResultNo.textContent = '';
  }

  // Manejar voto
  function handleVote(vote) {
    const data = loadPollData();
    
    if (!data.voted) {
      if (vote === 'yes') {
        data.yes++;
      } else {
        data.no++;
      }
      data.voted = true;
      savePollData(data);
      
      pollButtons.style.display = 'none';
      pollResults.style.display = 'block';
      updatePollDisplay(data);
    }
  }

  // Event listeners
  pollYesBtn.addEventListener('click', () => handleVote('yes'));
  pollNoBtn.addEventListener('click', () => handleVote('no'));

  // Cargar y mostrar resultados si ya se votó
  const pollData = loadPollData();
  if (pollData.voted) {
    pollButtons.style.display = 'none';
    pollResults.style.display = 'block';
    updatePollDisplay(pollData);
  }
})();