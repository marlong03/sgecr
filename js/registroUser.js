const nombreCompleto = document.getElementById("nombreCompleto")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirm = document.getElementById("passwordConfirm")
const btnRegistro = document.getElementById("btnRegistro")
const codigoEmpresarial = document.getElementById("codigoEmpresarial")

btnRegistro.addEventListener("click",()=>{
    validarNewUser()
})
function validarNewUser(){
    if( nombreCompleto.value.length !== 0 &&
        telefono.value.length !== 0 &&
        email.value.length !== 0 &&
        password.value.length !== 0 &&
        passwordConfirm.value.length !== 0 &&
        codigoEmpresarial.value.length !== 0){
            Swal.fire(
                '¡Registro exitoso!',
                'Presiona el boton para regresar',
                'success',
                )
        }else{
            Swal.fire(
                'Rellene todos los campos porfavor',
                'Presiona el boton para regresar',
                'error',
                )
        }
}