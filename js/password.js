// 1. Récupération des éléments HTML 
const passwordInput = document.getElementById("password-input");
const strengthBar = document.getElementById("strength-bar");
const feedback = document.getElementById("password-feedback");
const scoreText = document.getElementById("score");

// 2. NOUVEAU : On prépare une liste vide
let commonPasswords = [];

// 3. NOUVEAU : On va chercher le fichier texte externe
fetch('../passwords.txt')
  .then(response => response.text()) // On lit le contenu comme du texte
  .then(texteBrut => {
      // On découpe le texte à chaque retour à la ligne (\n)
      // .trim() nettoie les espaces cachés, .toLowerCase() met tout en minuscules
      commonPasswords = texteBrut.split('\n').map(mot => mot.trim().toLowerCase());
      console.log(`Succès ! ${commonPasswords.length} mots de passe chargés depuis le fichier.`);
  })
  .catch(erreur => {
      console.error("Erreur de chargement. Utilisez-vous bien un serveur local ?", erreur);
  });

// 4. Écouteur d'événement : se déclenche à chaque touche pressée
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  
  // Si le champ est vide, on remet tout à zéro
  if (password === "") {
      strengthBar.style.width = "0%";
      scoreText.textContent = "Sécurité : 0/100";
      feedback.innerHTML = "En attente d'analyse... Commencez à taper.";
      return; 
  }

  const result = analyzePassword(password);
  updateUI(result);
});

// 3. Fonction d'analyse (Le cerveau)
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
    score, // Raccourci JS pour score: score
    feedback: feedbackList
  };
}

// 4. Fonction d'affichage (Mise à jour de l'interface)
function updateUI(result) {
  const { score, feedback: feedbackList } = result;

  // Barre de progression
  strengthBar.style.width = score + "%";

  // Couleur selon score
  if (score < 40) {
    strengthBar.style.backgroundColor = "#e74c3c"; // Rouge CyberShield
  } else if (score < 70) {
    strengthBar.style.backgroundColor = "#f39c12"; // Orange CyberShield
  } else {
    strengthBar.style.backgroundColor = "#2ecc71"; // Vert
  }

  // Texte score
  scoreText.textContent = `Sécurité : ${score}/100`;

  // Feedback (Liste des conseils)
  if (feedbackList.length === 0) {
    feedback.innerHTML = "<span style='color: #2ecc71;'>Mot de passe fort ✅</span>";
  } else {
    // Transforme le tableau de textes en véritables balises <li> HTML
    feedback.innerHTML = feedbackList.map(f => `<li>${f}</li>`).join("");
  }
}