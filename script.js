document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const notification = document.getElementById('notification');
    
    // Mostrar/ocultar senha
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
    
    // Validação de NIF (simplificada para exemplo)
    function isValidNIF(nif) {
        // Validação básica - na prática deve ser mais complexa
        return /^\d{9}$/.test(nif);
    }
    
    // Mostrar notificação
    function showNotification(message, isSuccess) {
        notification.textContent = message;
        notification.className = 'notification';
        notification.classList.add(isSuccess ? 'success' : 'error', 'show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    // Simular login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nif = document.getElementById('nif').value;
        const password = passwordInput.value;
        
        // Validações
        if (!isValidNIF(nif)) {
            showNotification('Por favor, insira um NIF válido (9 dígitos).', false);
            return;
        }
        
        if (password.length < 6) {
            showNotification('A senha deve ter pelo menos 6 caracteres.', false);
            return;
        }
        
        // Simular requisição AJAX
        setTimeout(() => {
            // Aqui normalmente seria uma chamada ao servidor
            if (nif === '123456789' && password === 'maritima123') {
                showNotification('Login bem-sucedido! Redirecionando...', true);
                // Redirecionar após 2 segundos
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 2000);
            } else {
                showNotification('NIF ou senha incorretos. Por favor, tente novamente.', false);
            }
        }, 1000);
    });
    
    // Efeito de hover nos botões de login social
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});