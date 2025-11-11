let selectedChoice = '';

function goToChoices() {
  window.location.href = 'choice.html';
}

function goBack() {
  window.location.href = 'index.html';
}

function selectChoice(btn, choice) {
  selectedChoice = choice;
  document.querySelectorAll('.choices button').forEach(button => button.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('submitBtn').style.display = 'inline-block';
}

function submitChoice() {
  const formData = {
    access_key: "c3296c5f-d1b6-407b-8b71-76c4ff5e2d2d",
    choice: selectedChoice
  };

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(() => showPopup())
  .catch(() => alert("Something went wrong."));
}

function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 2000);
}

if (document.getElementById('submitBtn')) {
  document.getElementById('submitBtn').addEventListener('click', submitChoice);
}
