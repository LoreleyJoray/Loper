window.addEventListener('load', function(){

    let db = localStorage.getItem("usuarios");
    let dbUsuarios = JSON.parse(db);
    const formulario = document.getElementById('form-login');
    let inputNombre = document.querySelector('#nombre');
    let inputEmail = document.querySelector('#email');
    //let inputPassword = document.querySelector('#password');
    let respuesta = document.querySelector('#divContenidoLogin');
    // console.log (formulario, inputNombre, inputEmail, inputPassword)
          
    formulario.addEventListener('submit', function(event) {
            
        event.preventDefault();

        let errores = [];
        let usuarioEncontrado = false;
        let mensajeDeRegistro;

        if(inputNombre.value.length < 3){
            errores.push('El campo nombre debe tener al menos 4 caracteres');
        } 
        //else if(inputPassword.value.length < 4){
        //    errores.push('La contraseña debe contener al menos 4 caracteres.');
        //};

        for(let i=0; i< dbUsuarios.length ; i++){ 
            if (dbUsuarios[i].email === inputEmail.value) {
                usuarioEncontrado = true;
            } 
        }; 

        while (respuesta.firstChild) {
            respuesta.removeChild(respuesta.firstChild);
        };

        if (errores.length > 0) {
            let ulErrores = document.createElement('ul');
            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += `<li> ${errores[i]} </li>`
            };
            respuesta.appendChild(ulErrores);
        } else {
            if(usuarioEncontrado === false){
                dbUsuarios.push({
                    nombre: inputNombre.value,
                    email: inputEmail.value,
                    //password: inputPassword.value
                })
                localStorage.setItem ('usuarios', JSON.stringify(dbUsuarios)); 
                mensajeDeRegistro = `Bienvenido ${inputNombre.value} a nuestra página.`
            } else {
                mensajeDeRegistro = `El email ${inputEmail.value} ya se encuentra registrado.`
            }
            // console.log(mensajeDeRegistro);
            respuesta.innerHTML = `<p> ${mensajeDeRegistro} </p>`;
            inputNombre.value = "";
            inputEmail.value = "";
            //inputPassword.value = "";
        }   
    })
})