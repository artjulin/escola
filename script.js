document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const btnEnviar = document.getElementById('btnEnviar');

    // Função para validar e-mail simples
    const isEmailValid = (email) => {
        return email.includes('@') && email.includes('.');
    };

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Captura e limpa os valores (trim remove espaços vazios no início/fim)
        const dados = {
            nome: document.getElementById('nome').value.trim(),
            email: document.getElementById('email').value.trim(),
            mensagem: document.getElementById('mensagem').value.trim()
        };

        // Validações de segurança e UX
        if (dados.nome.length < 3) {
            alert('Por favor, insira um nome válido (mínimo 3 caracteres).');
            document.getElementById('nome').focus();
            return;
        }

        if (!isEmailValid(dados.email)) {
            alert('Por favor, insira um e-mail válido.');
            document.getElementById('email').focus();
            return;
        }

        // Início do estado de "Enviando"
        setLoadingState(true);

        // Simulação de uma requisição para servidor (API)
        console.log("Enviando dados para o servidor...", dados);

        setTimeout(() => {
            // Sucesso
            alert(`Sucesso! Olá ${dados.nome}, sua mensagem foi enviada. Responderemos em breve no e-mail: ${dados.email}`);
            
            contactForm.reset();
            setLoadingState(false);
        }, 2000);
    });

    // Função auxiliar para mudar o estado do botão
    function setLoadingState(isLoading) {
        if (isLoading) {
            btnEnviar.disabled = true;
            btnEnviar.innerHTML = '<span>⌛ Enviando...</span>';
            btnEnviar.style.transform = 'scale(0.98)';
        } else {
            btnEnviar.disabled = false;
            btnEnviar.innerHTML = 'Enviar Mensagem';
            btnEnviar.style.transform = 'scale(1)';
        }
    }
});
