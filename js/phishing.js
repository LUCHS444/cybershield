const phishingRules = {
    urgencyKeywords: ['urgent', 'immédiatement', 'expire', 'action', 'suspendu', 'vérifiez'],
    suspiciousDomains: ['paypa1.com', 'amaz0n.fr', 'security.tk'],
    redFlags: ['cliquez', 'connexion', 'expiré', 'gagné', 'félicitations'],
    legitimateSenders: ['@impots.gouv.fr', '@pole-emploi.fr']
};

const analyzeBtn = document.getElementById('analyzeBtn');
const messageInput = document.getElementById('message-input');
const scoreDisplay = document.getElementById('score');
const reasons = document.getElementById("reasons-phishing");



function analyzeEmail(text) {
    
    let score = 0;
    const words = text.toLowerCase().split(/\s+/); 


    // Mail envoyé par un expéditeur légitime
    const foundlegitimateSenders = phishingRules.legitimateSenders.find(sender => 
        text.toLowerCase().includes(sender))
        
    if (foundlegitimateSenders) {
      score -= 20;
    }
    
    // Mail contient des mots d'urgences
    const foundAnUrgency = phishingRules.urgencyKeywords.some(keyword => 
        text.toLowerCase().includes(keyword))

    if (foundAnUrgency) {
      score += 20; 
    }

    // Mail contient des mots suspects
    const foundFlags = words.filter(word => 
        phishingRules.redFlags.some(flag => word.includes(flag)));
        
    if (foundFlags.length > 0) {
        score += 30;
    }

    // Mail contient un site suspect
    const foundSuspiciousDomain = phishingRules.suspiciousDomains.find(domain => 
        text.toLowerCase().includes(domain)
    );
    if (foundSuspiciousDomain) {
      score += 60;
    }

    return Math.min(score, 100);
}

analyzeBtn.addEventListener('click', () => {
    const userText = messageInput.value;
    
    if (userText.trim() === "") {
        return;
    }
    const finalScore = analyzeEmail(userText);
  
    if (finalScore >= 100) {
        scoreDisplay.style.color = "red";
        scoreDisplay.textContent = `Phishing certain (${finalScore/10}/10)`;
    } else if (finalScore >= 30) {
        scoreDisplay.style.color = "orange";
        scoreDisplay.textContent = `Suspect (${finalScore/10}/10)`;
    } else {
        scoreDisplay.style.color = "green";
        scoreDisplay.textContent = `Risque faible (${finalScore/10}/10)`;
    }

    reasons.innerHTML = reasonsList.map(f => `<li>${f}</li>`).join("");

});