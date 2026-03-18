/**
 * Script Principal - Colégio São Cristóvão
 * Funções: Validação de formulário, Efeito Typewriter e Navegação Ativa
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. EFEITO TYPEWRITER (Página Técnico) ---
    // Corrige o erro de sair a frase toda de uma vez
    const tituloTecnico = document.getElementById('titulo-tecnico');
    
    if (tituloTecnico) {
        const textoCompleto = tituloTecnico.innerText;
        tituloTecnico.innerText = ''; // Limpa o texto original imediatamente
        
        let i = 0;
        const velocidade = 60; // Milissegundos entre cada letra

        function digitar() {
            if (i < textoCompleto.length) {
                tituloTecnico.innerHTML += textoCompleto.charAt(i);
                i++;
                setTimeout(digitar, velocidade);
            }
        }

        // Pequeno atraso inicial para garantir que a página carregou visualmente
        setTimeout(digitar, 300);
    }

    // --- 2. LÓGICA DO FORMULÁRIO DE CONTATO (Home) ---
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btnEnviar = document.getElementById('btnEnviar');
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();

            // Validação simples de e-mail com Regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (nome.length < 3) {
                alert("Por favor, insira seu nome completo.");
                return;
            }

            if (!emailRegex.test(email)) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            // Estado de carregamento no botão
            const textoOriginalBtn = btnEnviar.innerText;
            btnEnviar.disabled = true;
            btnEnviar.innerText = "Enviando...";
            btnEnviar.style.backgroundColor = "#28a745";

            // Simulação de envio para servidor
            console.log("Enviando dados:", { nome, email });

            setTimeout(() => {
                alert(`Obrigado, ${nome}! Recebemos sua mensagem e entraremos em contato em breve.`);
                
                // Reseta o formulário e o botão
                contactForm.reset();
                btnEnviar.disabled = false;
                btnEnviar.innerText = textoOriginalBtn;
                btnEnviar.style.backgroundColor = "#007bff";
            }, 1800);
        });
    }

    // --- 3. CONTADOR PARA O ENEM (Página Ensino Médio) ---
    // Exibe um alerta visual se estiver na página do Ensino Médio Regular
    if (window.location.pathname.includes('medio.html')) {
        console.log("Página de Ensino Médio detectada. Iniciando monitor de metas acadêmicas.");
        // Aqui você pode adicionar lógica específica para alunos do Médio
    }

    // --- 4. DESTAQUE NO MENU DE NAVEGAÇÃO ---
    // Identifica a página atual e destaca o link no menu
    const linksNav = document.querySelectorAll('nav ul li a');
    const paginaAtual = window.location.pathname.split("/").pop();

    linksNav.forEach(link => {
        if (link.getAttribute('href') === paginaAtual) {
            link.style.color = "#0056b3";
            link.style.borderBottom = "2px solid #007bff";
            link.style.paddingBottom = "5px";
        }
    });
});
