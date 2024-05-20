changeMode = document.getElementById('changeMode')
link = document.getElementsByName('a')

changeMode.addEventListener('click', function() {
    document.body.classList.toggle('light');
});
