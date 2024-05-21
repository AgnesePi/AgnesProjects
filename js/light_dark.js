document.addEventListener('DOMContentLoaded', function() {
    const temaSalvato = localStorage.getItem('tema');

    if (temaSalvato === 'light') {
        document.body.classList.add('light');
    }

    document.getElementById('changeMode').addEventListener('click', function() {
        document.body.classList.toggle('light');
        if (document.body.classList.contains('light')) {
            localStorage.setItem('tema', 'light');
        } else {
            localStorage.removeItem('tema');
        }
    });
});