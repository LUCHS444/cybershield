document.addEventListener("DOMContentLoaded", () => {

    let score = 100;
    let menaces = 0;
    let historique = [];

    menaces = parseInt(localStorage.getItem("menaces")) || 0;

    function mettreAJourDashboard() {
        document.getElementById("scoreGlobal").textContent = score;
        document.getElementById("menaces").textContent = menaces;

        let statut = "";
        if (score > 80) statut = "✅ Sécurisé";
        else if (score > 50) statut = "⚠️ Moyen";
        else statut = "🚨 Danger";

        document.getElementById("statut").textContent = statut;

        const liste = document.getElementById("historique");
        liste.innerHTML = "";

        historique.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            liste.appendChild(li);
        });
    }

    function simulerDonnees() {
        const events = [
            "Email phishing détecté",
            "Mot de passe faible",
            "Connexion suspecte",
            "Lien dangereux bloqué",
            "Analyse OK"
        ];

        const randomEvent = events[Math.floor(Math.random() * events.length)];

        historique.push(randomEvent);

        if (randomEvent !== "Analyse OK") {
            menaces++;
            score -= 10;
        } else {
            score += 2;
        }

        if (score > 100) score = 100;
        if (score < 0) score = 0;

        mettreAJourDashboard();
    }

    // rendre accessible au bouton HTML
    window.simulerDonnees = simulerDonnees;

    mettreAJourDashboard();

    simulerDonnees();
});