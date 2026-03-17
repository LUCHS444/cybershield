// 1. Récupération des éléments
const messageInput = document.getElementById('message-input');
const resultOutput = document.getElementById('result-output');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const bruteforceBtn = document.getElementById('bruteforce-btn');
const shiftInput = document.getElementById('shift-input'); 
const bruteforceResults = document.getElementById('bruteforce-results');

// 2. Le vrai algorithme de César (gère les majuscules, minuscules et tourne en boucle)
function algorithmeCesar(texte, decalage) {
    let resultat = '';
    
    for (let i = 0; i < texte.length; i++) {
        let char = texte[i];
        
        // Si c'est une lettre (on ignore les espaces et la ponctuation)
        if (char.match(/[a-z]/i)) {
            let code = texte.charCodeAt(i);
            
            // Majuscules (Codes ASCII de 65 à 90)
            if (code >= 65 && code <= 90) {
                // La formule magique du modulo (%) pour boucler de A à Z
                char = String.fromCharCode(((code - 65 + decalage) % 26 + 26) % 26 + 65);
            } 
            // Minuscules (Codes ASCII de 97 à 122)
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + decalage) % 26 + 26) % 26 + 97);
            }
        }
        resultat += char; // On ajoute la lettre traitée au résultat
    }
    return resultat;
}

// 3. Actions simples : Chiffrer et Déchiffrer
encryptBtn.addEventListener('click', function() {
    const texte = messageInput.value;
    const decalage = parseInt(shiftInput.value) || 0; 
    resultOutput.value = algorithmeCesar(texte, decalage);
});

decryptBtn.addEventListener('click', function() {
    const texte = messageInput.value;
    const decalage = parseInt(shiftInput.value) || 0;
    // Pour déchiffrer, on décale dans le sens inverse (en négatif)
    resultOutput.value = algorithmeCesar(texte, -decalage);
});

// 4. Action Force Brute : Générer un tableau HTML
bruteforceBtn.addEventListener('click', function() {
    const texte = messageInput.value;
    
    if (texte === '') {
        alert("Veuillez saisir un message à attaquer.");
        return;
    }

    // On prépare le début de notre tableau HTML
    let tableauHTML = `
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead>
                <tr style="background-color: #2c3e50; color: white;">
                    <th style="padding: 10px; border: 1px solid #bdc3c7;">Décalage testé</th>
                    <th style="padding: 10px; border: 1px solid #bdc3c7;">Résultat possible</th>
                </tr>
            </thead>
            <tbody>
    `;

    // On teste les 25 possibilités avec une boucle
    for (let i = 1; i <= 25; i++) {
        let tentative = algorithmeCesar(texte, -i);
        
        // On ajoute une ligne au tableau pour chaque tentative
        tableauHTML += `
            <tr>
                <td style="padding: 10px; border: 1px solid #bdc3c7;">- ${i}</td>
                <td style="padding: 10px; border: 1px solid #bdc3c7; font-family: monospace;">${tentative}</td>
            </tr>
        `;
    }

    // On ferme le tableau
    tableauHTML += `</tbody></table>`;

    // On injecte tout ce code HTML dans notre page
    bruteforceResults.innerHTML = tableauHTML;
});