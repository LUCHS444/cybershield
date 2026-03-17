const encryptBtn        = document.getElementById("encrypt-btn"),
      decryptBtn        = document.getElementById("decrypt-btn"),
      bruteforceBtn     = document.getElementById("bruteforce-btn"),
      resultOutput      = document.getElementById("result-output"),
      messageInput      = document.getElementById("message-input"),
      shiftInput        = document.getElementById("shift-input"),
      bruteforceResults = document.getElementById('bruteforce-results');

function caesarCipher(text, shift) {
    let result = '';
    
        for (let i = 0; i < text.length; i++) {
            let char = text[i];

        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
            } 
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
            }
        }
        result += char;
    }
    return result;
}

encryptBtn.addEventListener('click', function() {
    const text = messageInput.value;
    const shift = parseInt(shiftInput.value) || 0; 
    resultOutput.value = caesarCipher(text, shift);
});

decryptBtn.addEventListener('click', function() {
    const text = messageInput.value;
    const shift = parseInt(shiftInput.value) || 0;
    resultOutput.value = caesarCipher(text, -shift);
});

bruteforceBtn.addEventListener('click', function() {
    const text = messageInput.value;
    
    if (text === '') {
        alert("Veuillez saisir le message...");
        return;
    }

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

    for (let i = 1; i <= 25; i++) {
        let tentative = caesarCipher(text, -i);
        
        tableauHTML += `
            <tr>
                <td style="padding: 10px; border: 1px solid #bdc3c7;">- ${i}</td>
                <td style="padding: 10px; border: 1px solid #bdc3c7; font-family: monospace;">${tentative}</td>
            </tr>
        `;
    }

    tableauHTML += `</tbody></table>`;
    bruteforceResults.innerHTML = tableauHTML;
});