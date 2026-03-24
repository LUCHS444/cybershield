const questions = [
  { id: 1, categorie: "Phishing", difficulte: "facile", question: "C'est quoi le phishing ?", reponses: ["Spam pub", "Email frauduleux pour voler des infos", "Virus", "Firewall"], bonneReponse: 1, explication: "Imite une entité connue pour voler tes données." },
  { id: 2, categorie: "Mots de passe", difficulte: "facile", question: "Mdp le plus sécurisé ?", reponses: ["123456", "password", "G7!kLm#9qZ", "monnom2000"], bonneReponse: 2, explication: "Mélange majuscules, chiffres et symboles." },
  { id: 3, categorie: "Malware", difficulte: "moyen", question: "C'est quoi un ransomware ?", reponses: ["Antivirus", "Chiffre tes fichiers et demande une rançon", "Bloqueur pub", "VPN"], bonneReponse: 1, explication: "Chiffre tes fichiers et exige un paiement." },
  { id: 4, categorie: "Réseau", difficulte: "facile", question: "C'est quoi un firewall ?", reponses: ["Virus", "Filtre le trafic réseau", "Navigateur", "Antivirus"], bonneReponse: 1, explication: "Filtre les connexions entrantes et sortantes." },
  { id: 5, categorie: "Phishing", difficulte: "moyen", question: "Comment détecter un phishing ?", reponses: ["Logo officiel = safe", "Vérifier l'expéditeur et les liens", "Pas de PJ = safe", "Lire l'objet"], bonneReponse: 1, explication: "Toujours vérifier l'adresse réelle de l'expéditeur." },
  { id: 6, categorie: "Malware", difficulte: "facile", question: "C'est quoi un cheval de Troie ?", reponses: ["Virus visible", "Malware déguisé en logiciel légitime", "Ransomware", "Keylogger"], bonneReponse: 1, explication: "Se cache dans un programme normal pour infecter." },
  { id: 7, categorie: "Réseau", difficulte: "moyen", question: "C'est quoi MITM ?", reponses: ["DDoS", "Pirate qui intercepte une communication", "Virus réseau", "Scan de port"], bonneReponse: 1, explication: "Man In The Middle = s'intercale entre deux parties." },
  { id: 8, categorie: "Mots de passe", difficulte: "facile", question: "C'est quoi le 2FA ?", reponses: ["Double mdp", "Vérification en deux étapes", "Antivirus", "VPN"], bonneReponse: 1, explication: "Ajoute une 2ème couche de vérification." },
  { id: 9, categorie: "Réseau", difficulte: "difficile", question: "C'est quoi un DDoS ?", reponses: ["Vol de données", "Saturation d'un serveur par requêtes massives", "Chiffrement", "Intrusion"], bonneReponse: 1, explication: "Inonde un serveur pour le rendre inaccessible." },
  { id: 10, categorie: "Navigation", difficulte: "facile", question: "HTTPS c'est quoi ?", reponses: ["Navigateur", "Protocole de communication chiffré", "Antivirus web", "Pare-feu"], bonneReponse: 1, explication: "Chiffre les données entre ton navigateur et le serveur." },
  { id: 11, categorie: "Malware", difficulte: "moyen", question: "C'est quoi un keylogger ?", reponses: ["Antivirus", "Enregistre les touches tapées", "Firewall", "VPN"], bonneReponse: 1, explication: "Enregistre tout ce que tu tapes, mots de passe inclus." },
  { id: 12, categorie: "Navigation", difficulte: "facile", question: "C'est quoi un VPN ?", reponses: ["Antivirus", "Réseau privé qui masque ton IP", "Firewall", "Proxy"], bonneReponse: 1, explication: "Chiffre ta connexion et cache ton adresse IP." },
  { id: 13, categorie: "Phishing", difficulte: "difficile", question: "C'est quoi le spear phishing ?", reponses: ["Phishing de masse", "Phishing ciblé sur une personne précise", "Ransomware", "Malware"], bonneReponse: 1, explication: "Attaque personnalisée avec infos sur la victime." },
  { id: 14, categorie: "Réseau", difficulte: "moyen", question: "C'est quoi un scan de ports ?", reponses: ["Analyser les mdp", "Identifier les ports ouverts sur une machine", "Chiffrer le réseau", "Bloquer un firewall"], bonneReponse: 1, explication: "Permet de savoir quels services tournent sur une machine." },
  { id: 15, categorie: "Mots de passe", difficulte: "moyen", question: "C'est quoi le brute force ?", reponses: ["Tester toutes les combinaisons possibles", "Voler via phishing", "Chiffrer un mdp", "Reset mdp"], bonneReponse: 0, explication: "Teste automatiquement toutes les combinaisons possibles." },
  { id: 16, categorie: "Malware", difficulte: "difficile", question: "C'est quoi un rootkit ?", reponses: ["Antivirus", "Malware caché dans l'OS", "Ransomware", "Adware"], bonneReponse: 1, explication: "Très difficile à détecter, agit au niveau du noyau système." },
  { id: 17, categorie: "Navigation", difficulte: "moyen", question: "C'est quoi un cookie malveillant ?", reponses: ["Cookie normal", "Cookie pour voler une session", "Virus", "Spam"], bonneReponse: 1, explication: "Peut servir à voler ta session connectée." },
  { id: 18, categorie: "Réseau", difficulte: "difficile", question: "C'est quoi le spoofing ?", reponses: ["Chiffrer des données", "Usurper une identité réseau", "Scanner un réseau", "Bloquer un port"], bonneReponse: 1, explication: "Fait croire que la communication vient d'une source de confiance." },
  { id: 19, categorie: "Mots de passe", difficulte: "difficile", question: "C'est quoi une rainbow table ?", reponses: ["Brute force classique", "Table de hachages précalculés pour casser un mdp", "Phishing", "Keylogger"], bonneReponse: 1, explication: "Compare le hash du mdp à une liste précalculée." },
  { id: 20, categorie: "Navigation", difficulte: "facile", question: "C'est quoi un certificat SSL ?", reponses: ["Antivirus", "Preuve que le site est authentifié et chiffré", "Cookie", "Tracker"], bonneReponse: 1, explication: "Garantit l'identité du site et chiffre la connexion." },
  { id: 21, categorie: "Phishing", difficulte: "moyen", question: "C'est quoi le smishing ?", reponses: ["Phishing par email", "Phishing par SMS", "Phishing vocal", "Spam"], bonneReponse: 1, explication: "Phishing via SMS avec un faux lien." },
  { id: 22, categorie: "Phishing", difficulte: "moyen", question: "C'est quoi le vishing ?", reponses: ["Phishing par email", "Phishing par SMS", "Phishing par appel vocal", "Spam"], bonneReponse: 2, explication: "Phishing via appel téléphonique." },
  { id: 23, categorie: "Malware", difficulte: "moyen", question: "C'est quoi un adware ?", reponses: ["Antivirus", "Logiciel qui affiche des pubs non désirées", "Firewall", "Rootkit"], bonneReponse: 1, explication: "Affiche des publicités intrusives sur ta machine." },
  { id: 24, categorie: "Réseau", difficulte: "difficile", question: "C'est quoi le sniffing réseau ?", reponses: ["Bloquer des paquets", "Chiffrer le réseau", "Intercepter et lire les paquets réseau", "Scanner des ports"], bonneReponse: 2, explication: "Capture les paquets qui circulent sur le réseau." },
  { id: 25, categorie: "Mots de passe", difficulte: "facile", question: "C'est quoi un gestionnaire de mdp ?", reponses: ["Antivirus", "VPN", "Firewall", "Outil qui stocke et génère des mdp sécurisés"], bonneReponse: 3, explication: "Stocke tous tes mdp de façon chiffrée." }
];

let score = 0;
let streak = 0;
let questionActuelle = 0;
let selection = [];
let timerInterval = null;
let tempsRestant = 15;
let categoriesEchouees = [];

let modeDuel = false;
let joueurActif = 1;
let scoreJ1 = 0;
let scoreJ2 = 0;
let nomJ1 = "";
let nomJ2 = "";
let questionsJ1 = [];
let questionsJ2 = [];
let questionDuelActuelle = 0;

function cacherTout() {
  ["accueil", "modeChoix", "quiz", "resultats", "resultatsDuel"].forEach(id => {
    document.getElementById(id).style.display = "none";
  });
}

function retourAccueil() {
  cacherTout();
  document.getElementById("accueil").style.display = "block";
}

function afficherModeChoix() {
  cacherTout();
  document.getElementById("modeChoix").style.display = "block";
}

function demarrerQuiz() {
  modeDuel = false;
  score = 0;
  streak = 0;
  questionActuelle = 0;
  categoriesEchouees = [];
  selection = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);

  cacherTout();
  document.getElementById("quiz").style.display = "block";
  document.getElementById("joueur-actuel").style.display = "none";
  
  afficherQuestion();
}

function afficherQuestion() {
  const q = selection[questionActuelle];

  document.getElementById("numero").textContent = "Question " + (questionActuelle + 1) + "/10";
  document.getElementById("categorie").textContent = q.categorie;
  document.getElementById("difficulte").textContent = q.difficulte;
  document.getElementById("score-affiche").textContent = "Score : " + score;
  document.getElementById("streak-info").textContent = streak >= 3 ? "Streak x" + streak + " (+50%)" : "";
  document.getElementById("question-texte").textContent = q.question;

  const fb = document.getElementById("feedback");
  fb.textContent = "";
  fb.className = "";

  const reponsesDiv = document.getElementById("reponses");
  reponsesDiv.innerHTML = "";
  
  q.reponses.forEach((rep, index) => {
    const btn = document.createElement("button");
    btn.className = "reponse-btn";
    btn.textContent = rep;
    btn.onclick = () => verifierReponse(index, btn);
    reponsesDiv.appendChild(btn);
  });

  lancerTimer();
}

function verifierReponse(indexChoisi, btnClique) {
  clearInterval(timerInterval);
  const boutons = document.querySelectorAll(".reponse-btn");
  boutons.forEach(btn => btn.disabled = true);

  const q = selection[questionActuelle];
  const fb = document.getElementById("feedback");

  if (indexChoisi === q.bonneReponse) {
    streak++;
    let points = streak >= 3 ? 15 : 10;
    score += points;
    btnClique.classList.add("correcte");
    fb.textContent = "Bonne réponse ! +" + points + " pts. " + q.explication;
    fb.className = "ok";
  } else {
    streak = 0;
    categoriesEchouees.push(q.categorie);
    if(btnClique) btnClique.classList.add("mauvaise");
    boutons[q.bonneReponse].classList.add("correcte"); // Montre la bonne réponse
    fb.textContent = "Mauvaise réponse. " + q.explication;
    fb.className = "ko";
  }

  document.getElementById("score-affiche").textContent = "Score : " + score;
  document.getElementById("streak-info").textContent = streak >= 3 ? "Streak x" + streak + " (+50%)" : "";

  setTimeout(() => {
    questionActuelle++;
    if (questionActuelle < 10) {
      afficherQuestion();
    } else {
      afficherResultats();
    }
  }, 3500); // 3.5 secondes pour lire l'explication
}

function lancerTimer() {
  tempsRestant = 15;
  const timerTexte = document.getElementById("timer-texte");
  const timerBar = document.getElementById("timer-bar");
  
  timerTexte.textContent = tempsRestant + "s";
  timerTexte.style.color = "#333";
  timerBar.style.width = "100%";
  timerBar.style.background = "#1a73e8";

  timerInterval = setInterval(() => {
    tempsRestant--;
    timerTexte.textContent = tempsRestant + "s";
    
    const pourcentage = (tempsRestant / 15) * 100;
    timerBar.style.width = pourcentage + "%";

    if (tempsRestant <= 5) {
      timerTexte.style.color = "#dc3545";
      timerBar.style.background = "#dc3545";
    }

    if (tempsRestant <= 0) {
      clearInterval(timerInterval);
      streak = 0;
      const q = selection[questionActuelle];
      categoriesEchouees.push(q.categorie);
      
      document.querySelectorAll(".reponse-btn").forEach(btn => btn.disabled = true);
      document.querySelectorAll(".reponse-btn")[q.bonneReponse].classList.add("correcte");
      
      const fb = document.getElementById("feedback");
      fb.textContent = "Temps écoulé ! " + q.explication;
      fb.className = "timeout";

      setTimeout(() => {
        questionActuelle++;
        if (questionActuelle < 10) afficherQuestion();
        else afficherResultats();
      }, 3500);
    }
  }, 1000);
}

function afficherResultats() {
  cacherTout();
  document.getElementById("resultats").style.display = "block";
  document.getElementById("score-final").textContent = "Score final : " + score + "/150";

  let msg = score >= 120 ? "Excellent niveau de sensibilisation." : score >= 80 ? "Bon niveau, mais quelques lacunes." : "Une révision s'impose.";
  document.getElementById("message-resultat").textContent = msg;

  // Recommandations
  const divRec = document.getElementById("recommandations");
  divRec.innerHTML = "";
  if (categoriesEchouees.length > 0) {
    const categoriesUniques = [...new Set(categoriesEchouees)];
    let htmlRec = "<h4>Recommandations ciblées :</h4><ul>";
    categoriesUniques.forEach(cat => {
      htmlRec += "<li>Révisez le module concernant : <strong>" + cat + "</strong></li>";
    });
    htmlRec += "</ul>";
    divRec.innerHTML = htmlRec;
  }

  // LocalStorage
  const sessions = JSON.parse(localStorage.getItem("cyberShieldScores") || "[]");
  sessions.push({ score: score, date: new Date().toLocaleDateString() });
  const top5 = sessions.sort((a, b) => b.score - a.score).slice(0, 5);
  localStorage.setItem("cyberShieldScores", JSON.stringify(top5));

  const listeTop = document.getElementById("top5");
  listeTop.innerHTML = "";
  top5.forEach((s, i) => {
    const li = document.createElement("li");
    li.textContent = "Rang " + (i + 1) + " : " + s.score + " pts (" + s.date + ")";
    listeTop.appendChild(li);
  });
}

function demarrerDuel() {
  nomJ1 = document.getElementById("nomJ1").value.trim() || "Joueur 1";
  nomJ2 = document.getElementById("nomJ2").value.trim() || "Joueur 2";

  modeDuel = true;
  scoreJ1 = 0;
  scoreJ2 = 0;
  joueurActif = 1;
  questionDuelActuelle = 0;

  questionsJ1 = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
  questionsJ2 = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);

  cacherTout();
  document.getElementById("quiz").style.display = "block";
  document.getElementById("joueur-actuel").style.display = "block";

  afficherQuestionDuel();
}

function afficherQuestionDuel() {
  const q = joueurActif === 1 ? questionsJ1[questionDuelActuelle] : questionsJ2[questionDuelActuelle];
  const scoreActif = joueurActif === 1 ? scoreJ1 : scoreJ2;
  const nomActif = joueurActif === 1 ? nomJ1 : nomJ2;

  document.getElementById("joueur-actuel").textContent = "Tour de : " + nomActif;
  document.getElementById("numero").textContent = "Question " + (questionDuelActuelle + 1) + "/10";
  document.getElementById("categorie").textContent = q.categorie;
  document.getElementById("difficulte").textContent = q.difficulte;
  document.getElementById("score-affiche").textContent = "Score : " + scoreActif;
  document.getElementById("streak-info").textContent = ""; // Pas de streak en duel
  document.getElementById("question-texte").textContent = q.question;

  const fb = document.getElementById("feedback");
  fb.textContent = "";
  fb.className = "";

  const reponsesDiv = document.getElementById("reponses");
  reponsesDiv.innerHTML = "";
  
  q.reponses.forEach((rep, index) => {
    const btn = document.createElement("button");
    btn.className = "reponse-btn";
    btn.textContent = rep;
    btn.onclick = () => verifierReponseDuel(index, btn);
    reponsesDiv.appendChild(btn);
  });

  lancerTimerDuel();
}

function verifierReponseDuel(indexChoisi, btnClique) {
  clearInterval(timerInterval);
  const boutons = document.querySelectorAll(".reponse-btn");
  boutons.forEach(btn => btn.disabled = true);

  const q = joueurActif === 1 ? questionsJ1[questionDuelActuelle] : questionsJ2[questionDuelActuelle];
  const fb = document.getElementById("feedback");
  let points = 0;

  if (indexChoisi === q.bonneReponse) {
    points = 10;
    btnClique.classList.add("correcte");
    fb.textContent = "Bonne réponse ! +10 pts. " + q.explication;
    fb.className = "ok";
  } else {
    btnClique.classList.add("mauvaise");
    boutons[q.bonneReponse].classList.add("correcte");
    fb.textContent = "Mauvaise réponse. " + q.explication;
    fb.className = "ko";
  }

  if (joueurActif === 1) scoreJ1 += points;
  else scoreJ2 += points;

  document.getElementById("score-affiche").textContent = "Score : " + (joueurActif === 1 ? scoreJ1 : scoreJ2);

  setTimeout(() => {
    if (joueurActif === 1) {
      joueurActif = 2;
      afficherQuestionDuel();
    } else {
      questionDuelActuelle++;
      joueurActif = 1;
      if (questionDuelActuelle < 10) afficherQuestionDuel();
      else afficherResultatsDuel();
    }
  }, 3500);
}

function lancerTimerDuel() {
  tempsRestant = 15;
  const timerTexte = document.getElementById("timer-texte");
  const timerBar = document.getElementById("timer-bar");
  
  timerTexte.textContent = tempsRestant + "s";
  timerTexte.style.color = "#333";
  timerBar.style.width = "100%";
  timerBar.style.background = "#1a73e8";

  timerInterval = setInterval(() => {
    tempsRestant--;
    timerTexte.textContent = tempsRestant + "s";
    
    const pourcentage = (tempsRestant / 15) * 100;
    timerBar.style.width = pourcentage + "%";

    if (tempsRestant <= 5) {
      timerTexte.style.color = "#dc3545";
      timerBar.style.background = "#dc3545";
    }

    if (tempsRestant <= 0) {
      clearInterval(timerInterval);
      const q = joueurActif === 1 ? questionsJ1[questionDuelActuelle] : questionsJ2[questionDuelActuelle];
      
      document.querySelectorAll(".reponse-btn").forEach(btn => btn.disabled = true);
      document.querySelectorAll(".reponse-btn")[q.bonneReponse].classList.add("correcte");
      
      const fb = document.getElementById("feedback");
      fb.textContent = "Temps écoulé ! " + q.explication;
      fb.className = "timeout";

      setTimeout(() => {
        if (joueurActif === 1) {
          joueurActif = 2;
          afficherQuestionDuel();
        } else {
          questionDuelActuelle++;
          joueurActif = 1;
          if (questionDuelActuelle < 10) afficherQuestionDuel();
          else afficherResultatsDuel();
        }
      }, 3500);
    }
  }, 1000);
}

function afficherResultatsDuel() {
  cacherTout();
  document.getElementById("resultatsDuel").style.display = "block";

  let html = "";
  if (scoreJ1 > scoreJ2) {
    html = "<p>Gagnant : <strong>" + nomJ1 + "</strong> (" + scoreJ1 + " pts)</p><p>Perdant : " + nomJ2 + " (" + scoreJ2 + " pts)</p>";
  } else if (scoreJ2 > scoreJ1) {
    html = "<p>Gagnant : <strong>" + nomJ2 + "</strong> (" + scoreJ2 + " pts)</p><p>Perdant : " + nomJ1 + " (" + scoreJ1 + " pts)</p>";
  } else {
    html = "<p>Egalité parfaite : " + scoreJ1 + " pts chacun.</p>";
  }

  document.getElementById("podium").innerHTML = html;
}
