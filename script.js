// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const btnEnviar = document.getElementById('btnEnviar');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Feedback visual
        btnEnviar.innerText = "Enviando...";
        btnEnviar.style.backgroundColor = "#28a745";
        btnEnviar.disabled = true;

        // Simulação de processamento
        setTimeout(() => {
            alert(`Obrigado, ${nome}! Recebemos seu interesse. Entraremos em contato via ${email} em breve.`);
            
            // Reseta o estado original
            contactForm.reset();
            btnEnviar.innerText = "Enviar Mensagem";
            btnEnviar.style.backgroundColor = "#007bff";
            btnEnviar.disabled = false;
        }, 1500);
    });
});
