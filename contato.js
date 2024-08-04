    // Formulário
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        console.log(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);
        alert('Mensagem enviada com sucesso!');
        form.reset();
    });