
  document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. EFEITO TYPEWRITER CORRIGIDO ---
    const tituloTecnico = document.getElementById('titulo-tecnico');
    
    if (tituloTecnico) {
        // Pegamos o texto original do HTML
        const textoCompleto = tituloTecnico.innerText; 
        // Limpamos o título
        tituloTecnico.textContent = ''; 
        
        let i = 0;
        const velocidade = 60;

        function digitar() {
            if (i < textoCompleto.length) {
                // Usamos textContent em vez de innerHTML para manter os espaços
                tituloTecnico.textContent += textoCompleto.charAt(i);
                i++;
                setTimeout(digitar, velocidade);
            }
        }

        // Aguarda 300ms para começar a digitar
        setTimeout(digitar, 300);
    }

    // --- 2. LÓGICA DO FORMULÁRIO ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('btnEnviar');
            btn.disabled = true;
            btn.innerText = "Enviando...";

            setTimeout(() => {
                alert("Mensagem enviada com sucesso!");
                contactForm.reset();
                btn.disabled = false;
                btn.innerText = "Enviar Mensagem";
            }, 1500);
        });
    }
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
