// Récupération des éléments HTML (adapte les ID si besoin)
const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const feedback = document.getElementById("feedback");
const scoreText = document.getElementById("score");

// Liste simple de mots de passe faibles
const commonPasswords = [
  "123456", "password", "123456789", "qwerty", "abc123",
  "111111", "123123", "admin", "welcome"
];

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const result = analyzePassword(password);
  updateUI(result);
});

function analyzePassword(password) {
  let score = 0;
  let feedbackList = [];

  // Longueur
  if (password.length >= 8) {
    score += 20;
  } else {
    feedbackList.push("Au moins 8 caractères");
  }

  // Majuscules
  if (/[A-Z]/.test(password)) {
    score += 15;
  } else {
    feedbackList.push("Ajouter une majuscule");
  }

  // Minuscules
  if (/[a-z]/.test(password)) {
    score += 15;
  } else {
    feedbackList.push("Ajouter une minuscule");
  }

  // Chiffres
  if (/[0-9]/.test(password)) {
    score += 15;
  } else {
    feedbackList.push("Ajouter un chiffre");
  }

  // Caractères spéciaux
  if (/[^A-Za-z0-9]/.test(password)) {
    score += 20;
  } else {
    feedbackList.push("Ajouter un caractère spécial");
  }

  // Mot de passe courant
  if (commonPasswords.includes(password.toLowerCase())) {
    score = 10;
    feedbackList = ["Mot de passe trop courant ❌"];
  }

  // Répétitions simples (aaa, 111)
  if (/(.)\1{2,}/.test(password)) {
    score -= 10;
    feedbackList.push("Éviter les répétitions");
  }

  // Limiter score entre 0 et 100
  score = Math.max(0, Math.min(score, 100));

  return {
    score,
    feedback: feedbackList
  };
}

function updateUI(result) {
  const { score, feedback: feedbackList } = result;

  // Barre de progression
  strengthBar.style.width = score + "%";

  // Couleur selon score
  if (score < 40) {
    strengthBar.style.backgroundColor = "red";
  } else if (score < 70) {
    strengthBar.style.backgroundColor = "orange";
  } else {
    strengthBar.style.backgroundColor = "green";
  }

  // Texte score
  scoreText.textContent = `Sécurité : ${score}/100`;

  // Feedback
  if (feedbackList.length === 0) {
    feedback.innerHTML = "Mot de passe fort ✅";
  } else {
    feedback.innerHTML = feedbackList.map(f => `<li>${f}</li>`).join("");
  }
}