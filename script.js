document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do Formulário (se estiver na Home)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', lidarComEnvio);
    }

    // 2. Efeito Typewriter (se estiver na página do Técnico)
    const titulo = document.getElementById('titulo-tecnico');
    if (titulo) {
        const textoOriginal = titulo.innerText;
        titulo.innerText = '';
        let i = 0;

        function digitar() {
            if (i < textoOriginal.length) {
                titulo.innerText += textoOriginal.charAt(i);
                i++;
                setTimeout(digitar, 50);
            }
        }
        digitar();
    }

    // 3. Funções Auxiliares
    function lidarComEnvio(e) {
        e.preventDefault();
        const btn = document.getElementById('btnEnviar');
        const email = document.getElementById('email').value;

        if (!validarEmail(email)) {
            alert("Por favor, use um formato de e-mail válido.");
            return;
        }

        btn.disabled = true;
        btn.innerHTML = "Processando...";

        setTimeout(() => {
            alert("Solicitação enviada! Nossa equipe técnica/pedagógica entrará em contato.");
            contactForm.reset();
            btn.disabled = false;
            btn.innerHTML = "Enviar Mensagem";
        }, 2000);
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
