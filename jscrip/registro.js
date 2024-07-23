document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();

    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var password = document.getElementById('password').value.trim();
    var correo = document.getElementById('correo').value.trim();

    if(nombre ==='' || apellido === '' || password === '' || correo === '' || telefono === '' ){
        alert('Por favor, llene todos los campos');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(correo)){
        alert('Por favor, ingrese un correo electronico valido.');
        return;
    }

    console.log('Nombre', nombre);
    console.log('Apellido', apellido);
    console.log('Telefono', telefono);
    console.log('Password', password);
    console.log('Correo', correo);

    document.getElementById('formulario').reset();

});