function validarLogin(email, pass , location){
    if(!pruebaEmail(email)){
        Swal.fire(
        'Correo no valido',
        'Presiona el boton para regresar',
        'error',
        )
    }else{
        if(pruebaPassword(pass)){
            window.location = location
            
        }
    }
}

function pruebaEmail (valor){
	let expresion=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!expresion.exec(valor)){
        console.log('email no valido');
        return false
	}
	return true
}
function pruebaPassword(valor){
    if(valor.length < 5){
        Swal.fire(
        'Su contraseña tiene que ser mayor a 5 caracteres',
        'Presiona el boton para regresar',
        'error',
        )
        return false
    }
    return true
}

var emailUserLogin = document.getElementById("emailUser")
var passwordUserLogin = document.getElementById("passwordUser")
var btnEnviarInicioSesionUser = document.getElementById("btnEnviarInicioSesionUser")

btnEnviarInicioSesionUser.addEventListener("click",function(){
    let newUrl = window.location.href.replace("/html/cliente/inicioSesionInventario.html","/dashboard/html/dashboard.html");
    if(emailUserLogin.value.includes("domi")){
        newUrl = window.location.href.replace("/html/cliente/inicioSesionInventario.html","/dashboard/dashboardDomiciliario/dashboardDomiciliario.html");
    }
    validarLogin(emailUserLogin.value,passwordUserLogin.value,newUrl)
    console.log(newUrl);
})
