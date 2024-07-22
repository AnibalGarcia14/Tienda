document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === 'anibal' && password === '12345' ||  username === 'daniel' && password === 'jose'  ){

        window.location.href = '/inicio/home.html'
    }else{
        alert('Usuario o contraseña incorrecto. Por favor volver a intentar.');
    }
});